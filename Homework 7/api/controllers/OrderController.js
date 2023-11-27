import orderService from '../services/OrderService.js'
import { validateId } from "../../utils/validation/validateId.js";
import { HttpError } from "../../utils/HttpError.js";

export class OrderController {
    async delete(req, res, next) {
        const id = Number(req.params.id);
        if(!validateId(id)) return next(HttpError.invalidIntegerId());

        await orderService.delete(id)
            .then( (deletedOrder) => {
                res.status(200).json({
                    id: deletedOrder.orderId,
                    customerId: deletedOrder.customerId,
                    employeeId: deletedOrder.employeeId,
                    address: deletedOrder.orderAddress,
                    deliveryCost: deletedOrder.deliveryCost,
                    orderDate: deletedOrder.orderDate,
                });
            })
            .catch((err) => {
                next(new HttpError(404, 'Order with such id not found'));
            })
    }
}

export default new OrderController();