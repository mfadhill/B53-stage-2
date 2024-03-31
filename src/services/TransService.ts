import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { addTrans } from "../utils/TransUtils"
import cloudinary from "../config"
import * as fs from "fs"

const prisma = new PrismaClient()

export default new class TransService {
    private readonly TransRepository = prisma.transaction

        async findByID(req: Request, res: Response): Promise<Response> {
            try {
                const id = Number(req.params.id)
    
                if (id === null) {
                    return res.status(404).json({ message: "User not found" })
                }
    
                const trans = await this.TransRepository.findUnique({
                    where: { id: id },
                    include: {
                        transaction: true
                    }
                })
    
                return res.status(200).json(trans)
    
            } catch (error) {
                return res.status(500).json(error)
            }
        }

        async addTrans(req: Request, res: Response): Promise<Response> {
            try {
                const body = req.body
                const { error } = addTrans.validate(body)
                if (error) return res.status(400).json(error.message)
    
                const image = req.file
                if (!image) return res.status(400).json({ message: "No file added!" })
    
                const uploadCloudinary = await cloudinary.uploader.upload(image.path, {
                    folder: "batch53"
                })
    
                fs.unlinkSync(image.path)
    
                const trans = await this.TransRepository.create({
                    data: {
                        amount : body.amount,
                        date: body.date,
                        category : body.category,
                        note : body.note,
                        img: uploadCloudinary.secure_url,
                        transaction_id: parseInt(body.transaction_id),
                        created_at: new Date()
                    }
                })
    
                return res.status(200).json(trans)
    
            } catch (error) {
                return res.status(500).json(error)
            }
        }

        async updateTrans(req: Request, res: Response): Promise<Response> {
            try {
                const id = Number(req.params.id)
                const body = req.body
    
                const { error } = addTrans.validate(body)
                if (error) return res.status(400).json(error.message)
    
                const image = req.file
                let imgTransUrl = ''
    
                const oldTransData = await this.TransRepository.findUnique({
                    where: { id: id },
                    select: { img: true }
                })
    
                if (image) {
                    const uploadCloudinary = await cloudinary.uploader.upload(image.path, {
                        folder: "batch53"
                    })
    
                    imgTransUrl = uploadCloudinary.secure_url
    
                    fs.unlinkSync(image.path)
    
                    if (oldTransData && oldTransData.img) {
                        const publicId = oldTransData.img.split('/').pop()?.split('.')[0]
                        await cloudinary.uploader.destroy(publicId as string)
                    }
                } else {
                    imgTransUrl = oldTransData?.img || ''
                }
    
                const trans = await this.TransRepository.update({
                    where: { id: id },
                    data: {
                        amount : body.amount,
                        date: body.date,
                        category : body.category,
                        note : body.note,
                        img : imgTransUrl,
                        transaction_id: parseInt(body.transaction_id),
                        created_at: new Date()
                    }
                })
    
                return res.status(200).json(trans)
            } catch (error) {
                return res.status(500).json(error)
            }
        }

        async deleteTrans(req: Request, res: Response): Promise<Response> {
            try {
                const id = Number(req.params.id)
    
                const transData = await this.TransRepository.findUnique({
                    where: { id: id },
                    select: { img: true }
                })
    
                if (transData && transData.img) {
                    const publicId = transData.img.split('/').pop()?.split('.')[0]
                    await cloudinary.uploader.destroy(publicId as string)
                }
    
                const deleteTrans = await this.TransRepository.delete({
                    where: { id: id }
                })
    
                return res.status(200).json({deleteTrans: deleteTrans, message: "Transaction deleted succesfully"})
            } catch (error) {
                return res.status(500).json(error)
            }
        }
    
}
