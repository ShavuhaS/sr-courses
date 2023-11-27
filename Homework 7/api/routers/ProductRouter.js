import { Router } from 'express'
import productController from '../controllers/ProductController.js'

const productRouter = Router();

productRouter.post('/', productController.create);

export default productRouter;