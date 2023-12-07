import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "../services/ProductService";
import { CreateProductDTO } from "../dtos/CreateProductDTO";
import { ProductCategoryPipe } from "../pipes/ProductCategoryPipe";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    async create(@Body(ProductCategoryPipe) body: CreateProductDTO) {
        const createdProduct = await this.productService.create(body);

        return {
            id: createdProduct.productId,
            name: createdProduct.productName,
            category: createdProduct.category,
            amount: createdProduct.amount,
            price: createdProduct.price
        };
    }
}