import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidEntityIdException extends HttpException {
    constructor(entityName: string) {
        super(`${entityName} with such id not found`, HttpStatus.NOT_FOUND);
    }
}