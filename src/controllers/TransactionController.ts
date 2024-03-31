import TransService from "../services/TransService";
import { Request, Response } from 'express'


export default new class TransactionController {
    findById(req: Request, res: Response){
        TransService.findByID(req,res)
    }

    addTrans(req: Request, res: Response){
        TransService.addTrans(req,res)
    }

    updateTrans(req: Request, res: Response){
        TransService.updateTrans(req,res)
    }

    deleteTrans(req: Request, res: Response){
        TransService.deleteTrans(req,res)
    }
}