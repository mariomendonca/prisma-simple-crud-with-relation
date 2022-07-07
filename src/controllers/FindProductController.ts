import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export class FindProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const product = await prismaClient.product.findFirst({
      where: { id },
      include: {
        ProductCategory: true
      }
    })
    return res.status(200).json(product)
  }

}