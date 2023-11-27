import productRepository from '../../database/repositories/ProductRepository.js'

export class ProductService {
    async create(data) {
        return productRepository.create(data);
    }
}

export default new ProductService();