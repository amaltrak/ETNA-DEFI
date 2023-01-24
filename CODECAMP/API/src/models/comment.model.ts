import { DataTypes } from "sequelize";
import DatabaseSquelize from "../database/config";

const Comment = DatabaseSquelize.define("comment", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    login : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    comment : {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'null',
    },
    date : {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'null',
    },
    }, {
    tableName: 'comments',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});

export default Comment;