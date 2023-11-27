import customerService from '../services/CustomerService.js'
import { HttpError } from '../../utils/HttpError.js'
import { validateId } from '../../utils/validation/validateId.js'

export class CustomerController {
    async getCustomerOrdersWithTotal(req, res, next) {
        const id = Number(req.params.id);
        if(!validateId(id)) return next(HttpError.invalidIntegerId());

        try {
            const ordersWithTotal = await customerService.getCustomerOrdersWithTotal(id);

            ordersWithTotal.orders = ordersWithTotal.orders.map((order) => ({
                id: order.orderId,
                customerId: order.customerId,
                employeeId: order.employeeId,
                address: order.orderAddress,
                deliveryCost: order.deliveryCost,
                orderDate: order.orderDate,
                totalCost: order.totalCost,
            }));

            res.status(200).json(ordersWithTotal);
        } catch(err) {
            next(err);
        }
    }
}

export default new CustomerController();