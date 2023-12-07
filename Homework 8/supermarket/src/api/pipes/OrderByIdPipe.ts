import { Injectable, PipeTransform } from "@nestjs/common";
import { OrderRepository } from "../../database/repositories/OrderRepository";
import { InvalidEntityIdException } from "../../utils/exceptions/InvalidEntityIdException";

@Injectable()
export class OrderByIdPipe implements PipeTransform {
    constructor(private orderRepository: OrderRepository) { }

    async transform(id: number) {
        const order = await this.orderRepository.findById(id);
        if(!order) {
            throw new InvalidEntityIdException('Order');
        }
        return id;
    }
}