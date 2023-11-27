import prisma from '../PrismaClient.js'

export class ProductRepository {
    async create(data) {
        return prisma.product.create({
            data,
        });
    }
}

export default new ProductRepository();