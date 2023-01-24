/*
  @author: Nem
   hold the basic mechanics called after the request to the Comment route such as sql queries
*/
import { Request, Response } from 'express';
import login from "../services/auth.service"

async function Login(req: Request, res: Response) {
  const {login, password} = req.body;
  try {
      res.send(await login(login, password));
    } catch (err) {
      res.send('something went wrong');
    }
}

export { login };

