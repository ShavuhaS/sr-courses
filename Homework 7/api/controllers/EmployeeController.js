import employeeService from '../services/EmployeeService.js'
import { HttpError } from '../../utils/HttpError.js'
import { validateId } from '../../utils/validation/validateId.js'

export class EmployeeController {
    async update(req, res, next) {
        const id = Number(req.params.id);
        if(!validateId(id)) next(new HttpError(400, 'Invalid id. The id should be a positive 32bit integer'));

        await employeeService.update(id, req.body)
            .then((updatedEmployee) => {
                res.status(200).json(updatedEmployee);
            })
            .catch((err) => {
                console.log(err);
                next(new HttpError(404, 'Employee with such id not found'));
            })
    }
}

export default new EmployeeController();