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
    constructor(config, model) {
        this.config = config;
        this.odoo = new async_odoo_xmlrpc_1.default(config);
        this.model = model;
    }
    toLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.odoo.connect();
                return "Logging in: OK";
            }
            catch (e) {
                return "Logging in: ERROR " + e;
            }
        });
    }
    // List records
    search(filters, offset = 0, limit = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.odoo.connect();
            return yield this.odoo.execute_kw(this.model, "search", [
                filters,
                offset,
                limit,
            ]);
        });
    }
    // Count records
    countSearch(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.odoo.connect();
            return yield this.odoo.execute_kw(this.model, "search_count", [filters]);
        });
    }
    // Read records ids = [1,2,..]
    readIds(ids, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.odoo.connect();
            return yield this.odoo.execute_kw(this.model, "read", [ids, fields]);
        });
    }
    // Create records
    create(fieldsValues) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.odoo.connect();
            return yield this.odoo.execute_kw(this.model, "create", fieldsValues);
        });
    }
    update(ids, fieldsValues) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.odoo.connect();
            return yield this.odoo.execute_kw(this.model, "write", [ids, fieldsValues]);
        });
    }
    // Delete records ids = [1,2,..]
    deleteIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.odoo.connect();
            return yield this.odoo.execute_kw(this.model, "unlink", [ids]);
        });
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map