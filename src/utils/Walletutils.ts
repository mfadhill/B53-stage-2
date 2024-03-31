import * as Joi from "joi"

export const addWallet = Joi.object({
    inflow: Joi.string().required(),
    outflow : Joi.string(),
    balance: Joi.string().required(),
    wallet_id: Joi.string().required()
})