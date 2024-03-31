import * as Joi from 'joi'

export const register = Joi.object({
    email: Joi.string().email().required(),
    full_name: Joi.string().required(),
    password: Joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')).message('Password must be at least 8 characters long and contain at least one lowercase, one uppercase, and one number'),
                                                                                                    // min, max
    // role: Joi.string().required()
})

export const login = Joi.object({
    email : Joi.string().required(),
    password : Joi.string().required()
})