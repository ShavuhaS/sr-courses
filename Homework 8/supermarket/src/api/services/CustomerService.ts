import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../../database/repositories/OrderRepository";
import { OrderedProductRepository } from "../../database/repositories/OrderedProductRepository";


@Injectable()
export class CustomerService {
    constructor(
        private orderRepository: OrderRepository,
        private orderedProductRepository: OrderedProductRepository
    ) { }

    async getCustomerOrdersWithTotal(id: number) {
        const orders = await this.orderRepository.getCustomerOrders(id);
        const response = {
            orders: [],
            totalCost: 0
        };

        for (const order of orders) {
            const products = await this.orderedProductRepository.getProductsByOrderId(order.orderId);
            let orderCost = order.deliveryCost;
            products.forEach(({product, productAmount}) => {
                orderCost += product.price * productAmount;
            });
            response.orders.push({
                ...order,
                totalCost: orderCost,
            });
            response.totalCost += +orderCost.toFixed(2);
        }
        response.totalCost = +response.totalCost.toFixed(2);

        return response;
    }
}