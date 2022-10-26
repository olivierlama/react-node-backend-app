import Odoo from "async-odoo-xmlrpc";

interface Config {
  url: string;
  port: number;
  db: string;
  username: string;
  password: string;
}

class Client {
  config: Config;
  odoo: Odoo | undefined;
  constructor(config: Config) {
    this.config = config;
  }

  async connect() {
    this.odoo = new Odoo(this.config);
    await this.odoo.connect();
  }

  async query(model: string, filters: Array<Object>, fields: Array<String>) {
    await this.connect();
    if (this.odoo) {
      return await this.odoo.execute_kw(model, "search_read", [
        filters,
        fields, // fields
        0,
        5, // offset, limit
      ]);
    }
  }
}

//const client: Client = new Client(config);
export default Client;
