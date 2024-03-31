import UserController from "../controllers/UserController";
import PersonController from "../controllers/PersonController";
import WalletController from "../controllers/WalletController";
import TransactionController from "../controllers/TransactionController";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import upload from "../middlewares/UploadMiddleware";
import * as express from "express"
import path from "path"


const router = express.Router()

router.get('/users', UserController.find)
router.get('/user/:id', UserController.findById)
router.post('/adduser', UserController.addUser)
router.put('/updateuser/:id', UserController.updateUser)
router.delete('/deleteuser/:id', UserController.deleteUser)

//-------------------------------------------//
router.post('/register', PersonController.register)
router.post('/login', PersonController.login)
//------------------------------------------//

router.get('/wallet', WalletController.findByID)
router.post('/addwallet', WalletController.addWallet)
router.put('/updatewallet/:id', WalletController.updateWallet)
router.delete('/deletewallet/:id', WalletController.deleteWallet)
//----------------------------------------------------------------//
router.get('/trans', TransactionController.findById)
router.post('/addtrans', AuthMiddleware.AuthTi, upload.single('img'), TransactionController.addTrans)
router.put('/updatetrans/:id', AuthMiddleware.AuthTi, upload.single('img'), TransactionController.updateTrans)
router.delete('/deletetrans/:id',AuthMiddleware.AuthTi, TransactionController.deleteTrans)

router.use('/uploads', express.static(path.join(__dirname, 'uploads')))

export default router