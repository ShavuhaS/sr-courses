import employeeRepository from '../../database/repositories/EmployeeRepository.js'

export class EmployeeService {
    async update(employeeId, data) {
        return employeeRepository.updateById(employeeId, data);
    }
}

export default new EmployeeService();