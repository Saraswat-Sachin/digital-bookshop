import {body} from 'express-validator'


//A lot a validation can be added based upon our needs, just basics are added here.
export const validateUser = [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().notEmpty().withMessage('Valid email is required'),
    body('password').trim().notEmpty().withMessage('Passowrd is required'),
]