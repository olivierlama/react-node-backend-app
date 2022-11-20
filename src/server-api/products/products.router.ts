/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ProductService from "./products.service";
import { BaseProduct, Product } from "./product.interface";
import { Products } from "./products.interface";
/**
 * Router Definition
 */
export const productsRouter = express.Router();
/**
 * Controller Definitions
 */

// GET products

productsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const q_offset = req.query.offset;
    let offset = 0;
    if (q_offset) {
      offset = parseInt("" + q_offset, 10);
    }
    const q_limit = req.query.limit;
    let limit = 10;
    if (q_limit) {
      limit = parseInt("" + q_limit, 10);
    }
    // offset = isNaN(offset) ? 0 : offset;
    // console.log("offset", offset);

    //const limit = 10;

    // console.log("params", { offset, limit });
    console.log("query()", "start");
    const products: Products = await ProductService.query(offset, limit);
    console.log("query()", "end");
    res.status(200).send(products);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET items/:id
productsRouter.get("/id/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    console.log("id", id);

    console.log("ProductService.read()", "start");
    const product: Product = await ProductService.read(id);
    console.log("ProductService.read()", "end");
    res.status(200).send(product);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET items/:id
productsRouter.get("/name/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    console.log("name", name);

    console.log("ProductService.read()", "start");
    const product: Product = await ProductService.readByFieldNameString(
      "name",
      name
    );
    console.log("ProductService.read()", "end");
    res.status(200).send(product);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

productsRouter.get(
  "/vendor/partner_id/:partner_id",
  async (req: Request, res: Response) => {
    try {
      const partner_id = req.params.partner_id;
      console.log("partner_id", partner_id);

      console.log("ProductService.read()", "start");
      const product: Product = await ProductService.readVendorByFieldNameString(
        "partner_id",
        partner_id
      );
      console.log("ProductService.read()", "end");
      res.status(200).send(product);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  }
);
// POST items

// PUT items/:id

// DELETE items/:id
