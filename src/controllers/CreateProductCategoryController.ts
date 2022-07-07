import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export class CreateProductCategoryController {
  async handle(req: Request, res: Response) {
    const { idProduct, idCategory } = req.body

    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_category: idCategory,
        id_product: idProduct
      }
    })

    return res.status(201).json(productCategory)

  }
}