// handle requests and reponses
import { ServerResponse, IncomingMessage } from "http";
import Client from "api-client-odoo/src/client";
import { config } from "api-client-odoo/src/config";
const client = new Client(config, "product.product");
// List records

export async function search(req: IncomingMessage, res: ServerResponse) {
  const client = new Client(config, "product.product");

  // Query ids
  let ids: string[];
  console.log("Query ids");
  let filters = [["purchase_ok", "=", true]];
  ids = await client.search(filters);
  // no error, send the data
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(ids);
}
