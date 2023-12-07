import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../../database/repositories/OrderRepository";

@Injectable()
export class OrderService {
    constructor(private orderRepository: OrderRepository) { }

    async deleteById(id: number) {
        return this.orderRepository.deleteById(id);
    }
}