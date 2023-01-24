import { login } from '../controllers/auth.controller';

const express = require('express');

const authrouter = express.Router();

authrouter.post('/', login);

export default authrouter;
