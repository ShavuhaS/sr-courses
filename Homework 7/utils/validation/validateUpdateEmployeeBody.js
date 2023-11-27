import { validateString } from './validateString.js'

export const validateUpdateEmployeeBody = (body) => {
    const base = 'Invalid request. ';

    if(body.firstName !== undefined && !validateString(body.firstName)) {
        return base + 'The employee\'s first name should be a string value';
    }

    if(body.lastName !== undefined && !validateString(body.lastName)) {
        return base + 'The employee\'s last name should be a string value';
    }

    if(body.middleName !== undefined && !validateString(body.middleName)) {
        return base + 'The employee\'s middle name should be a string value';
    }

    if(body.position !== undefined && !validateString(body.position)) {
        return base + 'The employee\'s position should be a string value';
    }
};