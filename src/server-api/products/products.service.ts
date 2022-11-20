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
export const searchAndReadDetail = async (): Promise<Product[]> => {
  const fields = [
    "id",
    "name",
    "price_extra",
    "lst_price",
    "default_code",
    "code",
    "active",
    "standard_price",
    "display_name",
    "qty_available",
    "purchased_product_qty",
    "list_price",
  ];
  const filters = [["purchase_ok", "=", true]];
  const client = new Client(config.apiOdoo, "product.product");
  //   console.log("Logging in");
  //   console.log(await client.toLogin());
  console.log("Search and Read records ids = [1,2,..] with other fields");
  const ret = await client.searchAndReadDetail(filters, fields);
  console.log(ret);
  return ret;
};
