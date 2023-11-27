import prisma from '../PrismaClient.js';

export class CustomerRepository {
    async getCustomerOrdersWithProducts(customerId) {
        return prisma.customer.findUnique({
            where: { customerId },
            select: {
                orders: {
                    include: {
                        orderedProducts: {
                            select: {
                                product: true,
                                productAmount: true
                            }
                        }
                    }
                }
            }
        });
    }
}

export default new CustomerRepository();