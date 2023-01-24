/*
  @author: Nem
   hold the basic mechanics called after the request to the Comment route such as sql queries
*/
import { Request, Response } from 'express';
import { 
    GetAll, GetById, CreateComment, UpdateById, DeleteById
} from "../services/comment.service";

async function GetAllComment(req: Request, res: Response) {
    try {
        res.send(await GetAll());
      } catch (err) {
        res.send('something went wrong');
      }
}

async function GetCommentById(req: Request, res: Response) {
    const { cid } = req.params;
    try {
        res.send(await GetById(cid));
        } catch (err) {     
        res.send('something went wrong');
        }
}

async function CreateNewComment(req: Request, res: Response) {
    const { login, comment } = req.body;
    try {
        res.send(await CreateComment(login, comment));
        } catch (err) {
        res.send('something went wrong');
        }
}

async function UpdateCommentById(req: Request, res: Response) {
    const { cid } = req.params;
    const { login, comment } = req.body;
    try {
        res.send(await UpdateById(cid, login, comment));
        } catch (err) {
        res.send('something went wrong');
        }
}

async function DeleteCommentById(req: Request, res: Response) {
    const { cid } = req.params;
    try {
        res.send(await DeleteById(cid));
        } catch (err) {
        res.send('something went wrong');
        }
}

export { GetAllComment, GetCommentById, CreateNewComment, UpdateCommentById, DeleteCommentById };