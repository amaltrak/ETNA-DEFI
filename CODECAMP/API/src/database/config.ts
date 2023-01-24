import * as dotenv from 'dotenv';

dotenv.config();

const { Sequelize } = require('sequelize');

const DatabaseSquelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: process.env.DBHOST,
  dialect: process.env.DBTYPE,
  logging: false,
  define: {
    scopes: {
      excludeCreatedAtUpdateAt: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    },
    timestamps: false,
  },
});

export default DatabaseSquelize;
