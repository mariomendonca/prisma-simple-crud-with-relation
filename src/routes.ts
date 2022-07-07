import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithCategoryController } from "./controllers/CreateProductWithCategoryController";
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

export const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()
const createProductWithCategory = new CreateProductWithCategoryController()
const findProduct = new FindProductController()
const findCategory = new FindCategoryController()

router.post('/products', createProduct.handle)
router.post('/category', createCategory.handle)
router.post('/product-category', createProductCategory.handle)
router.post('/product-with-category', createProductWithCategory.handle)
router.get('/product/:id', findProduct.handle)
router.get('/category/:id', findCategory.handle)
