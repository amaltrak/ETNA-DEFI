import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import commentrouter from './routes/comment.route';
import meleerouter from './routes/melee.route';
import tagsrouter from './routes/tags.route';
import adminrouter from './routes/admin.route';
import authrouter from './routes/auth.route';

dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlcoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const PORT = process.env.APIPORT || 4111;
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World');
});
app.use('/tags', tagsrouter);
app.use('/comment', commentrouter);
app.use('/melee', meleerouter);
app.use('/adm', adminrouter);
app.use('/auth', authrouter);
app.listen(PORT, console.log(`Server listen on port: ${PORT}`));
