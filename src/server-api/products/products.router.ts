/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ProductService from "./products.service";
import { BaseProduct, Product } from "./product.interface";

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
    console.log("ProductService.searchAndReadDetail()", "start");

    const products: Product[] = await ProductService.searchAndReadDetail();
    console.log("ProductService.searchAndReadDetail()", "end");
    res.status(200).send(products);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET items/:id

// POST items

// PUT items/:id

// DELETE items/:id
