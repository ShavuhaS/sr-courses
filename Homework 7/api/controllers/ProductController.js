import productService from '../services/ProductService.js'
import { HttpError } from "../../utils/HttpError.js"
import { validateCreateProductBody } from '../../utils/validation/validateCreateProductBody.js'

export class ProductController {
    async create(req, res, next) {
        const error = validateCreateProductBody(req.body);
        if(error) return next(new HttpError(400, error));

        const dto = {
            productName: req.body.name,
            category: req.body.category.toUpperCase(),
            price: req.body.price,
            amount: req.body.amount
        }

        await productService.create(dto)
            .then((createdProduct) => {
                res.status(201).json({
                    id: createdProduct.productId,
                    name: createdProduct.productName,
                    category: createdProduct.category,
                    amount: createdProduct.amount,
                    price: createdProduct.price
                });
            })
            .catch((err) => {
                next(new HttpError(403, 'Invalid product category'));
            });
    }
}

export default new ProductController();