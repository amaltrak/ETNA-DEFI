import { DataTypes } from "sequelize";
import DatabaseSquelize from "../database/config";

const Creneau = DatabaseSquelize.define("Creneau", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: 'null',
    },
    duree : {
        type: DataTypes.INTEGER,
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
    reserve : {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'null',
    },
}, {
    tableName: 'creneau',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
});

export default Creneau;

