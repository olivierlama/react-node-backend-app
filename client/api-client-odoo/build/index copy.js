"use strict";
// Chaque appel à execute_kwprend les paramètres suivants :
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// la base de données à utiliser, une chaîne
// l'identifiant de l'utilisateur (récupéré via authenticate), un entier
// le mot de passe de l'utilisateur, une chaîne
// le nom du modèle, une chaîne
// le nom de la méthode, une chaîne
// un tableau/liste de paramètres passés par position
// un mapping/dict de paramètres à passer par mot clé (optionnel)
const config_1 = require("./config");
const client_1 = __importDefault(require("./client"));
const client = new client_1.default(config_1.config);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log("connect:ok");
    }
    catch (error) {
        console.log("connect:nok");
        console.log(error);
    }
}))();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const filters = [["id", "=", "15"]];
        const filters = [];
        let res = yield client.query("product.product", filters, [
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
        ], 10);
        console.log("Query product:ok");
        console.log(res);
    }
    catch (error) {
        console.log("Query product:nok");
        console.log(error);
    }
}))();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res = yield client.read("product.product", "id", "15", [
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
        console.log("Read product:ok");
        console.log(res);
    }
    catch (error) {
        console.log("Read product:nok");
        console.log(error);
    }
}))();
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
//# sourceMappingURL=index%20copy.js.map