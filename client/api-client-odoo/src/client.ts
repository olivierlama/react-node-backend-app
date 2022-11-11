import Odoo from "async-odoo-xmlrpc";

interface Config {
  url: string;
  port: number;
  db: string;
  username: string;
  password: string;
}

export default class Client {
  config: Config;
  odoo: Odoo;
  model: string;
  constructor(config: Config, model: string) {
    this.config = config;
    this.odoo = new Odoo(config);
    this.model = model;
  }

  async toLogin() {
    try {
      await this.odoo.connect();
      return "Logging in: OK";
    } catch (e) {
      return "Logging in: ERROR " + e;
    }
  }

  // List records
  async search(filters: Object[], offset = 0, limit = 0) {
    await this.odoo.connect();
    return await this.odoo.execute_kw(this.model, "search", [
      filters,
      offset,
      limit,
    ]);
  }

  // Count records
  async countSearch(filters: Object[]) {
    await this.odoo.connect();
    return await this.odoo.execute_kw(this.model, "search_count", [filters]);
  }

  // Read records ids = [1,2,..]
  async readIds(ids: string[], fields: string[]) {
    await this.odoo.connect();
    return await this.odoo.execute_kw(this.model, "read", [ids, fields]);
  }

  // Create records
  async create(fieldsValues: Object[]) {
    await this.odoo.connect();
    return await this.odoo.execute_kw(this.model, "create", fieldsValues);
  }
  async update(ids: string[], fieldsValues: Object) {
    await this.odoo.connect();
    return await this.odoo.execute_kw(this.model, "write", [ids, fieldsValues]);
  }
  // Delete records ids = [1,2,..]
  async deleteIds(ids: string[]) {
    await this.odoo.connect();
    return await this.odoo.execute_kw(this.model, "unlink", [ids]);
  }
}
