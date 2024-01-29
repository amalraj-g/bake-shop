import Joi from 'joi';

const registerValidation = async (req, res, next) => {
    const schema = Joi.object({
       name: Joi.string().required(),
       email: Joi.string().required().email(),
       password: Joi.string().required(),
       isAdmin: Joi.boolean(),
    });
    const { error, value } = await schema.validate(req.body);
    if(error){
        return res.status(400).json({
            message: error.message
        })
    } else {
        next();
    }
};
export {  registerValidation }