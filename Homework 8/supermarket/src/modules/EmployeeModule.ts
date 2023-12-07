import { Module } from "@nestjs/common";
import { EmployeeController } from "../api/controllers/EmployeeController";
import { EmployeeService } from "../api/services/EmployeeService";

@Module({
    controllers: [EmployeeController],
    providers: [EmployeeService],
})
export class EmployeeModule {}