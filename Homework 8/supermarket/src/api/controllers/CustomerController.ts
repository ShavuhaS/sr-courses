import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { CustomerService } from "../services/CustomerService";
import { CustomerByIdPipe } from "../pipes/CustomerByIdPipe";

@Controller('customers')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Get(':id/orders')
    async getCustomerOrdersWithTotal(@Param('id', ParseIntPipe, CustomerByIdPipe) id: number) {
        const ordersWithTotal = await this.customerService.getCustomerOrdersWithTotal(id);
        return {
            orders: ordersWithTotal.orders.map((order) => {
                return {
                    id: order.orderId,
                    customerId: order.customerId,
                    employeeId: order.employeeId,
                    address: order.orderAddress,
                    deliveryCost: order.deliveryCost,
                    orderDate: order.orderDate,
                    totalCost: order.totalCost
                }
            }),
            totalCost: ordersWithTotal.totalCost
        }
    }
}