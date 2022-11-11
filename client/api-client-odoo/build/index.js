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
const client_1 = __importDefault(require("./client"));
const config_1 = require("./config");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const client = new client_1.default(config_1.config, "product.product");
    // Logging in
    console.log("Logging in");
    console.log(yield client.toLogin());
    // Query ids
    let ids;
    console.log("Query ids");
    let filters = [["purchase_ok", "=", true]];
    ids = yield client.search(filters);
    console.log(ids);
    let offset = 2;
    let limit = 3;
    // Query ids from offset to limit
    console.log("Query ids from offset to limit");
    ids = yield client.search(filters, offset, limit);
    console.log(ids);
    // Count Query
    console.log("Count Query");
    console.log(yield client.countSearch(filters));
    // ReadIds with all fields
    //   console.log("ReadIds");
    //   console.log(await client.ReadIds(ids, []));
    // ReadIds with list of fields
    console.log("ReadIds with list of fields");
    let fields = [
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
    console.log(yield client.readIds(ids, fields));
    //Create records
    console.log("Create records");
    const fieldsValues = [{ name: "new-name" }];
    let id = yield client.create(fieldsValues);
    console.log(id);
    console.log("Read record : ", id);
    console.log(yield client.readIds(id, fields));
    //Update records
    console.log("Update records");
    console.log("Update record : ", id);
    const fieldValue = { name: "new-name updated" };
    console.log(yield client.update(id, fieldValue));
    console.log("Read record : ", id);
    console.log(yield client.readIds(id, fields));
    //Delete records
    console.log("Delete record : ", id);
    console.log(yield client.deleteIds(id));
    console.log("Read record : ", id);
    console.log(yield client.readIds(id, fields));
    filters = [["id", "=", id]];
    console.log("Search record id : ", id);
    console.log(yield client.search(filters));
}))();
//# sourceMappingURL=index.js.map