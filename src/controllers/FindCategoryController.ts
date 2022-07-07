import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export class FindCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const category = await prismaClient.category.findFirst({
      where: { id },
      include: {
        ProductCategory: true
      }
    })
    return res.status(200).json(category)
  }
}
