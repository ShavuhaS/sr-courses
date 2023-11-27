import {validateId} from "./validation/validateId.js";

export class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }

    static invalidIntegerId() {
        return new HttpError(400, 'Invalid id. The id should be a positive 32bit integer');
    }
}