/*
  @author: Nem
   hold the basic mechanics called after the request to the Admin route such as sql queries
 */
   import { Request, Response } from 'express';
   import {
     HashByName, modifpass, GetAll, GetById, CreateAdmin, UpdateById, DeleteById, Login,
   } from '../services/admin.service';
   
   async function GetAllAdmin(req: Request, res: Response) {
     try {
       await GetAll();
       res.send(await GetAll());
     } catch (err) {
       res.send('something went wrong');
     }
   }
   
   async function GetAdminById(req: Request, res: Response) {
     const { aid } = req.params;
     try {
       await GetById(aid);
       res.send(await GetById(aid));
     } catch (err) {
       res.send('something went wrong');
     }
   }
   
   async function CreateNewAdmin(req: Request, res: Response) {
     const { username, password } = req.body;
     res.send(await CreateAdmin(username, password));
   }
   
   async function UpdateAdminById(req: Request, res: Response) {
     const { aid } = req.params;
     const { ausername, apassword } = req.body;
     res.send(await UpdateById(aid, ausername, apassword));
   }
   
   async function DeleteAdminById(req: Request, res: Response) {
     const { aid } = req.params;
     res.send(await DeleteById(aid));
   }
   
   async function GetHashByName(req:Request, res:Response) {
     const { aname } = req.params;
     try {
       await HashByName(aname);
       res.send(await HashByName(aname));
     } catch (err) {
       res.send('something went wrong');
     }
   }
   
   async function NewPass(req:Request, res:Response) {
     const { ausername, anewPass, aoldPass } = req.body;
     await modifpass(ausername, anewPass, aoldPass);
     return res.send('Password change succefully !');
   }

   async function AdminLogin(req:Request, res:Response) {
     const { username, password } = req.body;
     res.send(await Login(username, password));
   }
   
   export {
     GetAllAdmin,
     GetAdminById,
     CreateNewAdmin,
     UpdateAdminById,
     DeleteAdminById,
     GetHashByName,
     NewPass,
     AdminLogin,
   };
