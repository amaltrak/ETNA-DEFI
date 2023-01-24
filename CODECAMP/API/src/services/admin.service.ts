import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import Admin from '../models/admin.model';

const { Op } = require('sequelize');

async function HashByName(uname:string) {
  const QueryResult = await Admin.findAll({ attributes: ['password_hash'] }, { where: { username: { [Op.like]: uname } } });
  if (QueryResult === null) {
    return 'something went wrong';
  }
  return QueryResult;
}

async function GetAll() {
  const QueryResult = await Admin.findAll();
  if (QueryResult === null) {
    return 'something went wrong';
  }
  return QueryResult;
}

async function GetById(aid:string) {
  const QueryResult = await Admin.findByPk(aid);
  if (QueryResult === null) {
    return 'something went wrong';
  }
  return QueryResult;
}

async function CreateAdmin(ausername:string, apassword:string) {
  const salt:string = await bcrypt.genSalt(10);
  const hash:string = await bcrypt.hash(apassword, salt);
  const QueryResult = await Admin.create({
    username: ausername, password_hash: hash, password_salt: salt,
  });
  return QueryResult;
}

async function UpdateById(aid:string, ausername:string, apassword:string) {
  const salt:string = await bcrypt.genSalt(10);
  const hash:string = await bcrypt.hash(apassword, salt);
  const QueryResult = await Admin.patch(
    {
      username: ausername,
      password_hash: hash,
      password_salt: salt,
    },
    {
      where: { id: aid },
    },
  );
  return QueryResult;
}

async function DeleteById(aid:string) {
  const delAdmin = GetById(aid);
  const QueryResult = await Admin.destroy({ delAdmin });
  return QueryResult;
}

async function comparePassword(oldPass:string, oldHash:string) {
  const result = await bcrypt.compare(oldPass, oldHash);
  return result;
}

async function hashPass(pass:string) {
  const salt:string = await bcrypt.genSalt(10);
  const hash:string = await bcrypt.hash(pass, salt);
  return { hash, salt };
}

async function modifpass(ausername:string, anewPass:string, aoldPass:string) {
  const newSalt:string = await bcrypt.genSalt(10);
  const newHash:string = await bcrypt.hash(anewPass, newSalt);
  const oldHash:string = await HashByName(ausername);
  const result = await bcrypt.compare(aoldPass, oldHash);
  if (result) {
    Admin.update(
      {
        password_hash: newHash,
        password_salt: newSalt,
      },
      {
        where: { ausername },
      },
    );
  }
}

const accessTokenSecret = 'youraccesstokensecret';
const refreshTokenSecret = 'yourrefreshtokensecrethere';
const refreshTokens = [];

async function Login(ausername:string, apassword:string) {
  // filter Admin from the Admins array by username and password
  const Admin = await comparePassword(apassword, await HashByName(ausername));
  if (Admin) {
    // generate an access token
    const accessToken = jwt.sign({ username: ausername }, accessTokenSecret, { expiresIn: '20m' });
    const refreshToken = jwt.sign({ username: ausername }, refreshTokenSecret);
    refreshTokens.push(refreshToken);

    return ({ accessToken, refreshToken });
  }
  return 'Something went wrong';
}

export {
  Login,
  GetAll,
  GetById,
  CreateAdmin,
  UpdateById,
  DeleteById,
  HashByName,
  modifpass,
  hashPass,
  comparePassword,
};