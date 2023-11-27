import employeeService from '../services/EmployeeService.js'
import { HttpError } from '../../utils/HttpError.js'
import { validateId } from '../../utils/validation/validateId.js'
import { validateUpdateEmployeeBody } from '../../utils/validation/validateUpdateEmployeeBody.js'

export class EmployeeController {
    async update(req, res, next) {
        const id = Number(req.params.id);
        if(!validateId(id)) return next(HttpError.invalidIntegerId());

        const error = validateUpdateEmployeeBody(req.body);
        if(error) return next(new HttpError(400, error));

        const body = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middleName: req.body.middleName,
            position: req.body.position
        }
        await employeeService.update(id, body)
            .then((updatedEmployee) => {
                const {employeeId, ...remainder} = updatedEmployee;
                updatedEmployee = {
                    id: employeeId,
                    ...remainder
                }
                res.status(200).json(updatedEmployee);
            })
            .catch((err) => {
                next(new HttpError(404, 'Employee with such id not found'));
            })
    }
}

export default new EmployeeController();