import { DataTypes } from "sequelize";
import DatabaseSquelize from "../database/config";

const Melee = DatabaseSquelize.define("melee", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    debut : {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'null',
    },
    fin : {
        type: DataTypes.DATE,
        allowNull: false,
        comment: 'null',
    },
    duree : {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
    },
    pause : {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
    },
    recurence : {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'null',
    },
}, {
    tableName: 'melee',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});

export default Melee;
