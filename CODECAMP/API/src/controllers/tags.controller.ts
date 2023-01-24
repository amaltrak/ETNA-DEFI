/*
  @author: Nem
   hold the basic mechanics called after the request to the Tag route such as sql queries
*/
import { Request, Response } from 'express';
import { 
    GetAll, GetById, CreateTag, UpdateById, DeleteById
} from "../services/tags.service";

async function GetAllTags(req: Request, res: Response) {
    try {
        res.send(await GetAll());
      } catch (err) {
        res.send('something went wrong');
      }
}

async function GetTagById(req: Request, res: Response) {
    const { tid } = req.params;
    try {
        res.send(await GetById(tid));
        } catch (err) {     
        res.send('something went wrong');
        }
}

async function CreateNewTag(req: Request, res: Response) {
    const { name, color } = req.body;
    try {
        res.send(await CreateTag(name, color));
        } catch (err) {
        res.send('something went wrong');
        }
}

async function UpdateTagById(req: Request, res: Response) {
    const { tid } = req.params;
    const { name, color } = req.body;
    try {
        res.send(await UpdateById(tid, name, color));
        } catch (err) {
        res.send('something went wrong');
        }
}

async function DeleteTagById(req: Request, res: Response) {
    const { tid } = req.params;
    try {
        res.send(await DeleteById(tid));
        } catch (err) {
        res.send('something went wrong');
        }
}

export { GetAllTags, GetTagById, CreateNewTag, UpdateTagById, DeleteTagById };