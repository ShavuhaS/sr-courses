import { Injectable } from "@nestjs/common";
import { PrismaService } from '../PrismaService';

@Injectable()
export class CustomerRepository {
    constructor(private prisma: PrismaService) { }

    async findById(customerId: number) {
        return this.prisma.customer.findUnique({
            where: { customerId }
        });
    }
}