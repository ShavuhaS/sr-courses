import orderService from '../services/OrderService.js'
import {validateId} from "../../utils/validation/validateId.js";
import {HttpError} from "../../utils/HttpError.js";

export class OrderController {
    async delete(req, res, next) {
        const id = Number(req.params.id);
        if(!validateId(id)) return next(new HttpError(400, 'Invalid id. The id should be a positive 32bit integer'));

        await orderService.delete(id)
            .then( (deletedOrder) => {
                res.status(200).json(deletedOrder);
            })
            .catch((err) => {
                next(new HttpError(404, 'Order with such id not found'));
            })
    }
}

export default new OrderController();