import { Module } from '@nestjs/common';
import { CustomerModule } from "./modules/CustomerModule";
import { EmployeeModule } from "./modules/EmployeeModule";
import { OrderModule } from "./modules/OrderModule";
import { ProductModule } from "./modules/ProductModule";
import { PrismaModule } from "./modules/PrismaModule";

@Module({
  imports: [
      CustomerModule,
      EmployeeModule,
      OrderModule,
      ProductModule,
      PrismaModule
  ]
})
export class AppModule {}
