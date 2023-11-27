import customerRepository from '../../database/repositories/CustomerRepository.js';
import { HttpError } from '../../utils/HttpError.js';

export class CustomerService {
    async getCustomerOrdersWithTotal(id) {
        const ordersWithProducts = await customerRepository.getCustomerOrdersWithProducts(id);
        if(!ordersWithProducts) throw new HttpError(404, "Customer with such id not found");

        let totalCost = 0;
        for(let order of ordersWithProducts.orders) {
            let orderCost = order.deliveryCost;
            for(let orderedProduct of order.orderedProducts) {
                orderCost += orderedProduct.product.price * orderedProduct.productAmount;
            }
            orderCost = +orderCost.toFixed(2);
            order.totalCost = orderCost;
            totalCost += orderCost;
            delete order.orderedProducts;
        }
        totalCost = +totalCost.toFixed(2);

        return {...ordersWithProducts, totalCost};
    }
}

export default new CustomerService();