import express from 'express';
import customerRouter from './api/routers/CustomerRouter.js';
import employeeRouter from './api/routers/EmployeeRouter.js'
import orderRouter from './api/routers/OrderRouter.js'
import {errorHandler} from './api/middlewares/ErrorHandler.js'

const app = express();
const port = 2804;

app.use(express.json());

app.use('/customers', customerRouter);
app.use('/employees', employeeRouter);
app.use('/orders', orderRouter);
app.get('/', (req, res) => {
    res.send("TG: @andha");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});