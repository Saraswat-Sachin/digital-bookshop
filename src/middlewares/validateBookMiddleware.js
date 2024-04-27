import {body} from 'express-validator'

//A lot a validation can be added based upon our needs, just basics are added here.
export const validateBook = [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('author').trim().notEmpty().withMessage('Author is required'),
]