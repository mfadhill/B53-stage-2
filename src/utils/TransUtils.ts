import * as Joi from "joi"

export const addTrans = Joi.object({
    amount: Joi.string().required(),
    date : Joi.string(),
    category: Joi.string().required(),
    note: Joi.string().required(),
    transaction_id: Joi.string().required()
})