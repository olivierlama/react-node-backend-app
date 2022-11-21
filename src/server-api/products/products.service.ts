/**
 * Data Model Interfaces
 */
import { BaseProduct, Product } from "./product.interface";
import { Products } from "./products.interface";
import config from "../config.json";
import Client from "../api-client-odoo/client";

/**
 * In-Memory Store
 */

/**
 * Service Methods
 */

//export const findAll = async (): Promise<Item[]> => Object.values(items);
// Search and Read records ids = [1,2,..] with other fields
export const query = async (offset = 0, limit = 0): Promise<Products> => {
  // const fields = [
  //   "id",
  //   "name",
  //   "price_extra",
  //   "lst_price",
  //   "default_code",
  //   "code",
  //   "active",
  //   "standard_price",
  //   "display_name",
  //   "qty_available",
  //   "purchased_product_qty",
  //   "list_price",
  // ];
  const fields: Object[] = [];
  const filters: Object[] = [];
  const client = new Client(config.apiOdoo, "product.template");
  const ret = await client.searchAndReadDetail(filters, fields, offset, limit);
  return ret;
};

export const read = async (id: number): Promise<Product> => {
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
): Promise<Product> => {
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
): Promise<Product> => {
  const fields = ["id", "partner_id", "price", "currency_id", "delay"];
  const filters = [[fieldName, "=", fieldValue]];

  const client = new Client(config.apiOdoo, "product.supplierinfo");
  console.log("Read", { fieldName, fieldValue });
  const ret = await client.searchAndReadDetail(filters, fields);
  console.log(ret);
  return ret;
};
