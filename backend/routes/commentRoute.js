import express from 'express';
import { verifyToken } from '../utils/VerifyUser.js'
import { createComment, editComment, getPostComments, likeComment } from '../controllers/commentController.js';

const router = express.Router()

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);

export default router