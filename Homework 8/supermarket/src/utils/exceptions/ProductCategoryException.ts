import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductCategoryException extends HttpException {
    constructor() {
        super('Invalid product category', HttpStatus.FORBIDDEN);
    }
}