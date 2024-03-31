import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
// import { addPartai } from "../utils/PartaiUtils"
// import cloudinary from "../config"
import * as fs from "fs"

const prisma = new PrismaClient()

export default new class WalletService {
    private readonly WalletRepository = prisma.wallet

    async findByID(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id)

            if (id === null) {
                return res.status(404).json({ message: "User not found" })
            }

            const partai = await this.WalletRepository.findUnique({
                where: { id: id },
                include: {
                    wallet: true
                }
            })

            return res.status(200).json(partai)

        } catch (error) {
            return res.status(500).json(error)
        }
    }


    async addWallet(req:Request, res:Response): Promise<Response>{
        try{
            const body = req.body

            
            const wallet = await this.WalletRepository.create({
                data : {
                    inflow : body.inflow,
                    outflow : body.outflow,
                    balance : body.balance,
                    wallet_id : body.wallet_id,
                    created_at: new Date()
                }
            })
            return res.status(200).json(wallet)
        } catch(error) {
            return res.status(500).json(error)
        }
    }

    async updateWallet(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const body = req.body
            // const { email, name } = req.body

            const updateWallet = await prisma.wallet.update({
                where: { id: id },
                data: {
                    inflow : body.inflow,
                    outflow : body.outflow,
                    balance : body.balance,
                    wallet_id : body.wallet_id,
                    created_at: new Date()
                }
            })
            return res.status(201).json(updateWallet)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async deleteWallet(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            const deleteWallet = await prisma.wallet.delete({
                where: { id: id },
            })
            return res.status(201).json({ deleteWallet: deleteWallet, message: "Wallet is deleted!!!!!" })
        } catch (error) {
            return res.status(500).json(error)
        }
    }

   
}