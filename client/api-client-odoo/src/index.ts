import Odoo from "async-odoo-xmlrpc";
import { config } from "./config";
interface Config {
  url: string;
  port: number;
  db: string;
  username: string;
  password: string;
}

const odoo = new Odoo(config);
// Logging in
(async () => {
  try {
    await odoo.connect();
    console.log("Logging in: OK");
  } catch (e) {
    console.log("Logging in: ERROR", e);
  }
})();
// List records
(async () => {
  await odoo.connect();
  let id = await odoo.execute_kw("product.product", "search", [
    [["purchase_ok", "=", true]],
  ]);

  console.log("List records - Result: ", id);
})();

// Pagination
const offset = 1;
const limit = 2;
(async () => {
  await odoo.connect();
  let id = await odoo.execute_kw("product.product", "search", [
    [["purchase_ok", "=", true]],
    offset,
    limit,
  ]);

  console.log("Pagination - Result: ", id);
})();

//Count records
(async () => {
  await odoo.connect();
  let rs = await odoo.execute_kw("product.product", "search_count", [
    [["purchase_ok", "=", true]],
  ]);
  console.log("Count records - Result: ", rs);
})();

//Read records
// (async () => {
//   await odoo.connect();
//   let id = await odoo.execute_kw("product.product", "search", [
//     [["purchase_ok", "=", true]],
//     0,
//     1,
//   ]);
//   let rs = await odoo.execute_kw("product.product", "read", [id]);
//   console.log("Read records - Result: ", rs);
// })();

//Read records filtered by fields
(async () => {
  let start = new Date().getTime();
  await odoo.connect();
  let id = await odoo.execute_kw("product.product", "search", [
    [["purchase_ok", "=", true]],
    0,
    1,
  ]);
  let rs = await odoo.execute_kw("product.product", "read", [
    id[0],
    [
      "id",
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
    ],
  ]);
  console.log("During ", new Date().getTime() - start);
  console.log("Read records filtered by fields - Result: ", rs);
})();

//Search and read
(async () => {
  await odoo.connect();
  let result = await odoo.execute_kw("product.product", "search_read", [
    [["purchase_ok", "=", true]],
    [
      "id",
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
    ], // fields
    0,
    5, // offset, limit
  ]);
  console.log("Search and read - Result: ", result);
})();

//Create records
(async () => {
  await odoo.connect();
  let id = await odoo.execute_kw("product.product", "create", [
    { name: "new-name" },
  ]);
  console.log("Create records - Result: ", id);
})();
