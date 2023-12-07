import { Injectable, PipeTransform } from "@nestjs/common";
import { CustomerRepository } from "../../database/repositories/CustomerRepository";
import { InvalidEntityIdException } from "../../utils/exceptions/InvalidEntityIdException";

@Injectable()
export class CustomerByIdPipe implements PipeTransform {
    constructor(private customerRepository: CustomerRepository) { }

    async transform(id: number) {
        const customer = await this.customerRepository.findById(id);
        if(!customer) {
            throw new InvalidEntityIdException('Customer');
        }
        return id;
    }
}