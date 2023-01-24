import Admin from "../models/admin.model";
import Comment from "../models/comment.model";
import Melee from "../models/melee.model";
import Tag from "../models/tag.model";

const prompts = require('prompts');

async function migrate() {
  await Admin.sync({ force: true });
  console.log('Admin (re)Sync Success');
  await Comment.sync({ force: true });
  console.log('Comment (re)Sync Success');
  await Melee.sync({ force: true });
  console.log('Melee (re)Sync Success');
  await Tag.sync({ force: true });
  console.log('Tag (re)Sync Success');
}
async function Prompt() {
  const response = await prompts({
    type: 'select',
    name: 'value',
    message: 'This action will drop all tables and re-sync them. Are you sure you want to do this ?',
    choices: [
      { title: 'yes', value: 0 },
      { title: 'no', value: 1 },
    ],
    initial: 1,
  });
  const promptOutput = await response;
  switch (promptOutput.value) {
    case 0:
      migrate();
      break;
    case 1:
      break;
    default:
      break;
  }
}
Prompt();
