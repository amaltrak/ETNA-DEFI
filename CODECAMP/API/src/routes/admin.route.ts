import {
    GetAllAdmin, GetAdminById, CreateNewAdmin, UpdateAdminById, DeleteAdminById, GetHashByName, NewPass, AdminLogin,
  } from '../controllers/admin.controller';
  
  const express = require('express');
  
  const adminrouter = express.Router();
  
  adminrouter.get('/password_hash/:uname', GetHashByName);
    
  adminrouter.post('new-pass/', NewPass);
  
  adminrouter.get('/', GetAllAdmin);
  
  adminrouter.get('/:uid', GetAdminById);
  
  adminrouter.post('/login', AdminLogin);
  
  adminrouter.post('/', CreateNewAdmin);
  
  adminrouter.patch('/:uid', UpdateAdminById);
  
  adminrouter.delete('/:uid', DeleteAdminById);
  
  export default adminrouter;
  