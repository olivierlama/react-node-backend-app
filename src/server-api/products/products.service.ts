import { BaseProduct, Product } from "./product";
import config from "../config.json";
import Client from "../api-client-odoo/client";

/**
 * Service Methods
 */

//export const findAll = async (): Promise<Item[]> => Object.values(items);
// Search and Read records ids = [1,2,..] with other fields

export const query = async (offset = 0, limit = 0): Promise<Product[]> => {
  const product = new Product();
  const fields = Object.keys(product);
  const filters: Object[] = [];
  const client = new Client(config.apiOdoo, "product.template");
  const ret = await client.searchAndReadDetail(filters, fields, offset, limit);
  return ret;
};

export const read = async (id: number): Promise<any> => {
  const fields: Object[] = [];
  const filters = [["id", "=", id]];

  const client = new Client(config.apiOdoo, "product.product");
  console.log("Read id", id);
  let ret = await client.searchAndReadDetail(filters, fields);
  ret = ret[0];
  console.log(ret);
  const seller_ids: number[] = ret["seller_ids"];
  // console.log("sell", seller_ids);
  // console.log(
  //   "seller_ids.map((id) => id + 1);",
  //   seller_ids.map((id) => id + 1)
  // );

  for (let index = 0; index < seller_ids.length; index++) {
    const id = seller_ids[index];
    ret["seller_ids"][index] = await readVendorByFieldNameString("id", "" + id);
  }

  return ret;
};

export const readByFieldNameString = async (
  fieldName: string,
  fieldValue: string
): Promise<any> => {
  const fields: Object[] = [];
  const filters = [[fieldName, "=", fieldValue]];

  const client = new Client(config.apiOdoo, "product.product");
  console.log("Read", { fieldName, fieldValue });
  const ret = await client.searchAndReadDetail(filters, fields);
  console.log(ret);
  return ret;
};

export const readVendorByFieldNameString = async (
  fieldName: string,
  fieldValue: string
): Promise<any> => {
  //const fields = ["id", "partner_id", "price", "currency_id", "delay"];
  const fields: Object[] = [];
  const filters = [[fieldName, "=", fieldValue]];

  const client = new Client(config.apiOdoo, "product.supplierinfo");
  console.log("Read", { fieldName, fieldValue });
  const ret = await client.searchAndReadDetail(filters, fields);
  console.log(ret);
  return ret;
};

export const create = async (newProduct: BaseProduct): Promise<number> => {
  //Create records
  console.log("Create records");
  // const product = new BaseProduct();
  // const fieldsValues = Object.entries(newProduct);
  const fieldsValues = Array.of(newProduct);

  console.log("fieldsValues", fieldsValues);

  const client = new Client(config.apiOdoo, "product.product");
  let id = await client.create(fieldsValues);
  console.log("id created", id);
  // console.log("Read record : ", id);
  // console.log(await client.readIds(id, fields));
  return id;
};
