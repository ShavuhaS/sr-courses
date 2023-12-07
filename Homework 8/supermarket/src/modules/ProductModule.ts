import { Module } from "@nestjs/common";
import { ProductController } from "../api/controllers/ProductController";
import { ProductService } from "../api/services/ProductService";

@Module({
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}