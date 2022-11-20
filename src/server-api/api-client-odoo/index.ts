// import Client from "./client";
// import { Config } from "./config.interface";

// (async () => {
//   const client = new Client(config, "product.product");
//   // Logging in
//   console.log("Logging in");
//   console.log(await client.toLogin());
//   // Query ids
//   let ids: string[];
//   console.log("Query ids");
//   let filters = [["purchase_ok", "=", true]];
//   ids = await client.search(filters);
//   console.log(ids);
//   let offset = 2;
//   let limit = 3;
//   // Query ids from offset to limit
//   console.log("Query ids from offset to limit");
//   ids = await client.search(filters, offset, limit);
//   console.log(ids);
//   // Count Query
//   console.log("Count Query");
//   console.log(await client.countSearch(filters));

//   // ReadIds with all fields
//   //   console.log("ReadIds");
//   //   console.log(await client.ReadIds(ids, []));

//   // ReadIds with list of fields
//   console.log("ReadIds with list of fields");
//   let fields = [
//     "id",
//     "name",
//     "price_extra",
//     "lst_price",
//     "default_code",
//     "code",
//     "active",
//     "standard_price",
//     "display_name",
//     "qty_available",
//     "purchased_product_qty",
//     "list_price",
//   ];
//   console.log(await client.readIds(ids, fields));
//   // Search and Read records ids = [1,2,..] with other fields
//   console.log("Search and Read records ids = [1,2,..] with other fields");
//   console.log(await client.searchAndReadDetail(filters, fields));

//   //Create records
//   console.log("Create records");
//   const fieldsValues = [{ name: "new-name" }];
//   let id = await client.create(fieldsValues);
//   console.log(id);
//   console.log("Read record : ", id);
//   console.log(await client.readIds(id, fields));

//   //Update records
//   console.log("Update records");
//   console.log("Update record : ", id);
//   const fieldValue = { name: "new-name updated" };
//   console.log(await client.update(id, fieldValue));
//   console.log("Read record : ", id);
//   console.log(await client.readIds(id, fields));
//   //Delete records
//   console.log("Delete record : ", id);
//   console.log(await client.deleteIds(id));
//   console.log("Read record : ", id);
//   console.log(await client.readIds(id, fields));
//   filters = [["id", "=", id]];
//   console.log("Search record id : ", id);
//   console.log(await client.search(filters));
// })();
