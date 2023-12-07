import { Injectable } from "@nestjs/common";
import { PrismaService } from "../PrismaService";

@Injectable()
export class OrderedProductRepository {
    constructor(private prisma: PrismaService) { }

    async getProductsByOrderId(orderId: number) {
        return this.prisma.orderedProduct.findMany({
            where: { orderId },
            select: {
                product: true,
                productAmount: true,
            }
        });
    }
}