import Joi from 'joi';
//import asyncHandler from './asyncHandler.js';

const registerValidation = async (req, res, next) => {
    const schema = Joi.object({
       name: Joi.string().required(),
       email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["co","com"] },
      }),
        password: Joi.string().required(),
       isAdmin: Joi.boolean(),
    });
    const {error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    } else {
        next();
    }
};
export {  registerValidation }