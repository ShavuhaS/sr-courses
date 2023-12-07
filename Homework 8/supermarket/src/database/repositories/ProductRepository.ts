import { Injectable } from "@nestjs/common";
import { Prisma } from '@prisma/client';
import { PrismaService } from "../PrismaService";

@Injectable()
export class ProductRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.ProductCreateInput) {
        return this.prisma.product.create({
           data,
        });
    }
}