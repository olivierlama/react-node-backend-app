/**
 * Required External Modules
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { productsRouter } from "./products/products.router";

import config from "./config.json";
/**
 * App Variables
 */

const app = express();
/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

/**
 * Server Activation
 */
app.listen(config.port, () => {
  console.log(
    `Listening on port ${config.port} - http://localhost:${config.port} `
  );
});
