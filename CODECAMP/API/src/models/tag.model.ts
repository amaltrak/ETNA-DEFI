import { DataTypes } from "sequelize";
import DatabaseSquelize from "../database/config";

const Tag = DatabaseSquelize.define("Tag", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
    color : {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'null',
    },
}, {
    tableName: 'Tags',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});

export default Tag;