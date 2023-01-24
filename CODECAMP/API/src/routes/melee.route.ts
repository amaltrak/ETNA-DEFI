import { GetAllMelee, GetMeleeById, CreateNewMelee, UpdateMeleeById, DeleteMeleeById } from "../controllers/melee.controller";

const express = require('express');

const meleerouter = express.Router();

meleerouter.get('/', GetAllMelee);

meleerouter.get('/:cid', GetMeleeById);

meleerouter.post('/', CreateNewMelee);

meleerouter.patch('/:cid', UpdateMeleeById);

meleerouter.delete('/:cid', DeleteMeleeById);

export default meleerouter;
