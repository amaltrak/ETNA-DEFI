import { GetAllTags,  GetTagById, CreateNewTag, UpdateTagById, DeleteTagById } from '../controllers/tags.controller';

const express = require('express');

const tagsrouter = express.Router();

tagsrouter.get('/', GetAllTags);

tagsrouter.get('/:tid', GetTagById);

tagsrouter.post('/', CreateNewTag);

tagsrouter.patch('/:tid', UpdateTagById);

tagsrouter.delete('/:tid', DeleteTagById);

export default tagsrouter;