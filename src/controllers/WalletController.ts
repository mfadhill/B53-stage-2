import { Request, Response } from "express"
import WalletService from "../services/WalletService"

export default new class PartaiController {
    findByID(req: Request, res: Response) {
        WalletService.findByID(req, res)
    }
    addWallet(req: Request, res: Response) {
        WalletService.addWallet(req, res)
    }
    updateWallet(req: Request, res: Response) {
        WalletService.updateWallet(req, res)
    }
    deleteWallet(req: Request, res: Response) {
        WalletService.deleteWallet(req, res)
    }
}