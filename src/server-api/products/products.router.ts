/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { BaseProduct } from "./product";
import * as ProductService from "./products.service";
/**
 * Router Definition
 */
export const productsRouter = express.Router();
/**
 * Controller Definitions
 */

// GET products/

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
    console.log("query()", "start");
    const products = await ProductService.query(offset, limit);
    console.log("query()", "end");
    res.status(200).send(products);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET products/id/:id
productsRouter.get("/id/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    console.log("id", id);

    console.log("ProductService.read()", "start");
    const product = await ProductService.read(id);
    console.log("ProductService.read()", "end");
    res.status(200).send(product);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET products/name/:name
productsRouter.get("/name/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    console.log("name", name);

    console.log("ProductService.read()", "start");
    const product = await ProductService.readByFieldNameString("name", name);
    console.log("ProductService.read()", "end");
    res.status(200).send(product);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET products/vendor/id/:id
productsRouter.get("/vendor/id/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log("id", id);

    console.log("ProductService.read()", "start");
    const productVendor = await ProductService.readVendorByFieldNameString(
      "id",
      id
    );
    console.log("ProductService.read()", "end");
    res.status(200).send(productVendor);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST products
productsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const product: BaseProduct = req.body;

    const id = await ProductService.create(product);

    res.status(201).json(id);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
// PUT items/:id

// DELETE items/:id
