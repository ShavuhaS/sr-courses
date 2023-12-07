import { Controller, Patch, Param, Body, ParseIntPipe } from "@nestjs/common";
import { EmployeeService } from "../services/EmployeeService";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";
import { EmployeeByIdPipe } from "../pipes/EmployeeByIdPipe";

@Controller('employees')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe, EmployeeByIdPipe) id: number, @Body() body: UpdateEmployeeDTO) {
        const updatedEmployee = await this.employeeService.update(id, body);

        return {
            id: updatedEmployee.employeeId,
            firstName: updatedEmployee.firstName,
            lastName: updatedEmployee.lastName,
            middleName: updatedEmployee.middleName,
            position: updatedEmployee.position
        };
    }
}