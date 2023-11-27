import prisma from '../PrismaClient.js'

export class OrderRepository {
    async deleteById(id) {
        return prisma.order.delete({
           where: {
               orderId: id
           }
        });
    }
}

export default new OrderRepository();