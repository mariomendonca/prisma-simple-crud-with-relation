import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const {
      name,
      bar_code,
      price
    } = req.body

    const product = await prismaClient.product.create({
      data: {
        bar_code,
        name,
        price
      }
    })

    return res.status(201).json(product)

  }
}