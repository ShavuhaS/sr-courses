import { validateString } from './validateString.js'

export const validateCreateProductBody = (body) => {
    const base = 'Invalid request. '
    if(body.name === undefined || body.category === undefined || body.price === undefined) {
        return base + 'Cannot create a product without name, category or price';
    }
    if(!validateString(body.name)) {
        return base + 'The product\'s name should be a string value';
    }
    if(!validateString(body.category)) {
        return base + 'The product\'s category should be a string value';
    }
    let price = Number(body.price);
    if(isNaN(price) || price <= 0) {
        return base + 'The product\'s price should be a positive number';
    }
    let amount = Number(body.amount);
    if(body.amount !== undefined && (isNaN(amount) || amount <= 0 || parseInt(amount, 10) !== amount || amount >= 2 ** 31)) {
        return base + 'The product\'s amount should be a positive 32bit integer number';
    }
}