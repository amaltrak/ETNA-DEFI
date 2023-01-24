/*
  @author: Nem
   hold the basic mechanics called after the request to the Melee route such as sql queries
*/

import { Request, Response } from 'express';
import { GetAll , GetById, CreateMelee, UpdateById, DeleteById } from "../services/melee.service";

async function GetAllMelee(req: Request, res: Response) {
    try {
        res.send(await GetAll());
      } catch (err) {
        res.send('something went wrong');
      }
}

async function GetMeleeById(req: Request, res: Response) {
    const { cid } = req.params;
    try {
        res.send(await GetById(cid));
        } catch (err) {     
        res.send('something went wrong');
        }
}

async function CreateNewMelee(req: Request, res: Response) {
    const { debut, fin, duree, pause, recurence } = req.body;
    try {
        res.send(await CreateMelee(debut, fin, duree, pause, recurence));
        } catch (err) {
        res.send('something went wrong');
        }
}

async function UpdateMeleeById(req: Request, res: Response) {
    const { cid } = req.params;
    const { debut, fin, duree, pause, recurence } = req.body;
    try {
        res.send(await UpdateById(cid, debut, fin, duree, pause, recurence));
        } catch (err) {
        res.send('something went wrong');
        }
}

async function DeleteMeleeById(req: Request, res: Response) {
    const { cid } = req.params;
    try {
        res.send(await DeleteById(cid));
        } catch (err) {
        res.send('something went wrong');
        }
}

export { GetAllMelee, GetMeleeById, CreateNewMelee, UpdateMeleeById, DeleteMeleeById };