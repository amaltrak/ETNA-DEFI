import { DataTypes } from "sequelize";
import DatabaseSquelize from "../database/config";

const Admin = DatabaseSquelize.define("Admin", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    hash : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    salt : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
}, {
    tableName: 'Admin',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});

export default Admin;