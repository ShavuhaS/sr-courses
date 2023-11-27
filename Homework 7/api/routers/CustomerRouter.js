import { Router } from 'express';
import customerController from '../controllers/CustomerController.js'

const customerRouter = Router();

customerRouter.get('/:id/orders', customerController.getCustomerOrdersWithTotal);

export default customerRouter;