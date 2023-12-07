import { Injectable } from "@nestjs/common";
import { PrismaService } from "../PrismaService";

@Injectable()
export class OrderRepository {
    constructor(private prisma: PrismaService) { }

    async findById(orderId: number) {
        return this.prisma.order.findUnique({
            where: { orderId }
        })
    }

    async deleteById(orderId: number) {
        return this.prisma.order.delete({
            where: { orderId }
        });
    }

    async getCustomerOrders(customerId: number) {
        return this.prisma.order.findMany({
           where: { customerId }
        });
    }
}