import { Router } from 'express'
import orderController from '../controllers/OrderController.js'

const orderRouter = Router();

orderRouter.delete('/:id', orderController.delete);

export default orderRouter;