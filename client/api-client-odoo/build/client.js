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
class Client {
    constructor(config) {
        this.config = config;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this.odoo = new async_odoo_xmlrpc_1.default(this.config);
            yield this.odoo.connect();
        });
    }
    query(model, filters, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            if (this.odoo) {
                return yield this.odoo.execute_kw(model, "search_read", [
                    filters,
                    fields,
                    0,
                    5, // offset, limit
                ]);
            }
        });
    }
}
//const client: Client = new Client(config);
exports.default = Client;
//# sourceMappingURL=client.js.map