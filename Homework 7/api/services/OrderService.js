import orderRepository from '../../database/repositories/OrderRepository.js'

export class OrderService {
    async delete(orderId) {
        return orderRepository.deleteById(orderId);
    }
}

export default new OrderService();