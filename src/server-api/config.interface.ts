import { Config as ConfigApiOdoo } from "./api-client-odoo/config.interface";
export interface Config {
  apiOdoo: ConfigApiOdoo;
  port: number;
}
