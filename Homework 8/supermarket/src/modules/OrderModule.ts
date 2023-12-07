import { Module } from "@nestjs/common";
import { OrderController } from "../api/controllers/OrderController";
import { OrderService } from "../api/services/OrderService";

@Module({
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}