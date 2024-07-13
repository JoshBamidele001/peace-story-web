import express from 'express'
import { getUsers, test, updateUser } from '../controllers/userController.js';
import { verifyToken } from '../utils/VerifyUser.js';


const router = express.Router();

router.get("/test", test)
router.post("/update/:id", verifyToken, updateUser)
router.get("/getusers", verifyToken, getUsers)



export default router