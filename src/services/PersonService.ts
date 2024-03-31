import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { register, login } from "../utils/PersonUtils"
import * as bcyrpt from "bcrypt"
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default new class PersonService {
    private readonly PersonRepository = prisma.user

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error } = register.validate(body)
            if (error) return res.status(400).json(error.message)

            const isMailRegisted = await this.PersonRepository.count({ where: { email: body.email } })
            if (isMailRegisted > 0) return res.status(400).json({ message: "Email already registed, change!" })

            const hashPassword = await bcyrpt.hash(body.password, 10)

            const Person = await this.PersonRepository.create({
                data: {
                    email: body.email,
                    password: hashPassword,
                    full_name: body.full_name,
                    // role: body.role,
                    created_at: new Date()
                }
            })

            return res.status(201).json(Person)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error, value } = login.validate(body)
            if (error) return res.status(400).json({ message: "Error while validating data" })

            const isMailRegisted = await this.PersonRepository.findFirst({ where: { email: value.email } })
            if (!isMailRegisted) return res.status(409).json({ message: "Email isnt Registed" })

            const isMacthPassword = await bcyrpt.compare(value.password, isMailRegisted.password)
            if (!isMacthPassword) return res.status(409).json({ message: "Incorrect Password!" })

            const tokenPayload = {
                id: isMailRegisted.id,
                // role: isMailRegisted.role
            }

            const token = jwt.sign({ tokenPayload }, 'SECRET_KEY', { expiresIn: 99999 })

            return res.status(200).json(token)

        } catch (error) {
            return res.status(500).json(error)
        }
    }
}