import { Global, Module } from '@nestjs/common'
import { PrismaService } from "../database/PrismaService";
import { CustomerRepository } from "../database/repositories/CustomerRepository";
import { OrderRepository } from "../database/repositories/OrderRepository";
import { OrderedProductRepository } from "../database/repositories/OrderedProductRepository";
import { EmployeeRepository } from "../database/repositories/EmployeeRepository";
import { ProductRepository } from "../database/repositories/ProductRepository";

@Global()
@Module({
    providers: [
        PrismaService,
        CustomerRepository,
        OrderRepository,
        OrderedProductRepository,
        EmployeeRepository,
        ProductRepository
    ],
    exports: [
        PrismaService,
        CustomerRepository,
        OrderRepository,
        OrderedProductRepository,
        EmployeeRepository,
        ProductRepository
    ],
})
export class PrismaModule {}