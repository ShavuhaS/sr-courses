import { Injectable, PipeTransform } from "@nestjs/common";
import { EmployeeRepository } from "../../database/repositories/EmployeeRepository";
import { InvalidEntityIdException } from "../../utils/exceptions/InvalidEntityIdException";

@Injectable()
export class EmployeeByIdPipe implements PipeTransform {
    constructor(private employeeRepository: EmployeeRepository) { }

    async transform(id: number) {
        const employee = await this.employeeRepository.findById(id);
        if(!employee) {
            throw new InvalidEntityIdException('Employee');
        }
        return id;
    }
}