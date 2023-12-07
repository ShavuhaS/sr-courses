import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../database/repositories/ProductRepository";
import { CreateProductDTO } from "../dtos/CreateProductDTO";

@Injectable()
export class ProductService {
    constructor(private productRepository: ProductRepository) { }

    async create(data: CreateProductDTO) {
        return this.productRepository.create({
            productName: data.name,
            category: data.category,
            amount: data.amount,
            price: data.price
        });
    }
}