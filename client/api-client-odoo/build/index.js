"use strict";
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
const async_odoo_xmlrpc_1 = __importDefault(require("async-odoo-xmlrpc"));
const config_1 = require("./config");
const odoo = new async_odoo_xmlrpc_1.default(config_1.config);
// Logging in
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield odoo.connect();
        console.log("Logging in: OK");
    }
    catch (e) {
        console.log("Logging in: ERROR", e);
    }
}))();
// List records
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield odoo.connect();
    let id = yield odoo.execute_kw("product.product", "search", [
        [["purchase_ok", "=", true]],
    ]);
    console.log("List records - Result: ", id);
}))();
// Pagination
const offset = 1;
const limit = 2;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield odoo.connect();
    let id = yield odoo.execute_kw("product.product", "search", [
        [["purchase_ok", "=", true]],
        offset,
        limit,
    ]);
    console.log("Pagination - Result: ", id);
}))();
//Count records
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield odoo.connect();
    let rs = yield odoo.execute_kw("product.product", "search_count", [
        [["purchase_ok", "=", true]],
    ]);
    console.log("Count records - Result: ", rs);
}))();
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    let start = new Date().getTime();
    yield odoo.connect();
    let id = yield odoo.execute_kw("product.product", "search", [
        [["purchase_ok", "=", true]],
        0,
        1,
    ]);
    let rs = yield odoo.execute_kw("product.product", "read", [
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
}))();
//Search and read
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield odoo.connect();
    let result = yield odoo.execute_kw("product.product", "search_read", [
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
        ],
        0,
        5, // offset, limit
    ]);
    console.log("Search and read - Result: ", result);
}))();
//Create records
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield odoo.connect();
    let id = yield odoo.execute_kw("product.product", "create", [
        { name: "new-name" },
    ]);
    console.log("Create records - Result: ", id);
}))();
//# sourceMappingURL=index.js.map