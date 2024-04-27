import express from 'express'
import { authUser, registerUser, logoutUser} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'
import { validateUser } from '../middlewares/validateUserMiddleware.js'

const router = express.Router()
// register, login, logout
router.post('/', validateUser, registerUser)
router.post('/login', validateUser, authUser)
router.post('/logout', protect, logoutUser)

export default router