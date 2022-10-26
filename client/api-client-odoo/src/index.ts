// Chaque appel à execute_kwprend les paramètres suivants :

// la base de données à utiliser, une chaîne

// l'identifiant de l'utilisateur (récupéré via authenticate), un entier

// le mot de passe de l'utilisateur, une chaîne

// le nom du modèle, une chaîne

// le nom de la méthode, une chaîne

// un tableau/liste de paramètres passés par position

// un mapping/dict de paramètres à passer par mot clé (optionnel)
import { config } from "./config";
import Client from "./client";
const client = new Client(config);

(async () => {
  //console.log("ol", 1);

  try {
    //console.log("ol", 2);
    await client.connect();
    console.log("connect:ok");
    const filters = [["id", "=", "15"]];
    // const filters: any = [];

    let res = await client.query("product.product", filters, [
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
    ]);
    0;
    console.log("Query product:ok");
    console.log(res);
  } catch (error) {
    console.log("nok");
    console.log(error);
  }
})();

//console.log(config);
// const host = "http://52.210.77.87";
// const port = 8069;
// const db = "db-odoo";
// const username = "admin@admin.com";
// const password = "3cb0f37dfb972c21473a1649758c3b7dbda63c18";

//const Odoo = require("async-odoo-xmlrpc");

// var odoo = new Odoo(config);
// // Logging in
// (async () => {
//   try {
//     await odoo.connect();
//     console.log("Connect to Odoo XML-RPC is successed.");
//   } catch (e) {
//     console.error("Error when try connect Odoo XML-RPC.", e);
//   }
// })();
// //Search and read
// (async () => {
//   await odoo.connect();
//   let result = await odoo.execute_kw("product.product", "search_read", [
//     [],
//     ["name", "list_price"], // fields
//     0,
//     5, // offset, limit
//   ]);
//   console.log("Result: ", result);
// })();
