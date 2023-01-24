import { GetAllComment,  GetCommentById, CreateNewComment, UpdateCommentById, DeleteCommentById } from '../controllers/comment.controller';

const express = require('express');

const commentrouter = express.Router();

commentrouter.get('/', GetAllComment);

commentrouter.get('/:cid', GetCommentById);

commentrouter.post('/', CreateNewComment);

commentrouter.patch('/:cid', UpdateCommentById);

commentrouter.delete('/:cid', DeleteCommentById);

export default commentrouter;
