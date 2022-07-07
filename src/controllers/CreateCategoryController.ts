import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body

    const category = await prismaClient.category.create({ data: { name } })

    return res.status(201).json(category)

  }
}