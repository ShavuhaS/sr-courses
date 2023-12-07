import { Injectable, PipeTransform} from "@nestjs/common";
import { CreateProductDTO } from "../dtos/CreateProductDTO";
import { Category } from '@prisma/client'
import { ProductCategoryException } from "../../utils/exceptions/ProductCategoryException";

@Injectable()
export class ProductCategoryPipe implements PipeTransform {
    async transform(data: CreateProductDTO) {
        if(!(data.category in Category)) {
            throw new ProductCategoryException();
        }

        return data;
    }
}