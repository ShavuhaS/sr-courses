import { Injectable } from "@nestjs/common";
import { PrismaService } from "../PrismaService";
import { Prisma } from "@prisma/client";

@Injectable()
export class EmployeeRepository {
    constructor(private prisma: PrismaService) { }

    async findById(employeeId: number) {
        return this.prisma.employee.findUnique({
            where: { employeeId }
        })
    }

    async updateById(id: number, data: Prisma.EmployeeUpdateInput) {
        return this.prisma.employee.update({
            where: { employeeId: id },
            data
        });
    }
}