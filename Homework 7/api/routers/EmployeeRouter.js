import { Router } from 'express'
import employeeController from "../controllers/EmployeeController.js";

const employeeRouter = Router();

employeeRouter.patch('/:id', employeeController.update);

export default employeeRouter;