import { Module } from '@nestjs/common'
import { CustomerController } from "../api/controllers/CustomerController";
import { CustomerService } from "../api/services/CustomerService";

@Module({
    controllers: [ CustomerController ],
    providers: [ CustomerService ],
})
export class CustomerModule {}