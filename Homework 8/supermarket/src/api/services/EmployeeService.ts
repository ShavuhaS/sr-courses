import { Injectable } from "@nestjs/common";
import { EmployeeRepository } from "../../database/repositories/EmployeeRepository";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";

@Injectable()
export class EmployeeService {
    constructor(private employeeRepository: EmployeeRepository) { }

    async update(employeeId: number, data: UpdateEmployeeDTO) {
        return this.employeeRepository.updateById(employeeId, data);
    }
}