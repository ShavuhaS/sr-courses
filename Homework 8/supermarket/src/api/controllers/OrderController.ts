import { Controller, Delete, Param, ParseIntPipe } from "@nestjs/common";
import { OrderByIdPipe } from "../pipes/OrderByIdPipe";
import { OrderService } from "../services/OrderService";

@Controller('orders')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe, OrderByIdPipe) id: number) {
        const deletedOrder = await this.orderService.deleteById(id);

        return {
            id: deletedOrder.orderId,
            customerId: deletedOrder.customerId,
            employeeId: deletedOrder.employeeId,
            address: deletedOrder.orderAddress,
            deliveryCost: deletedOrder.deliveryCost,
            orderDate: deletedOrder.orderDate
        };
    }
}