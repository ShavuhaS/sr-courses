import prisma from '../PrismaClient.js'

export class EmployeeRepository {
    async updateById(id, data) {
        return prisma.employee.update({
            where: { employeeId: id },
            data
        });
    }
}

export default new EmployeeRepository();