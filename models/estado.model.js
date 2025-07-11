import {Sequelize, DataTypes} from 'sequelize';
import orm from '../config/sequelize.js';

export const Estado = orm.define("Estado", {
    id_estado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
}, {
    freezeTableName: true,
    tableName: 'tb_estado',
    timestamps: false
});

export const connect = async function () {
    await orm.authenticate();
    console.log("Conexión establecida");
};

export const getAll = async function () {
    const results = await Estado.findAll({
        where: { estado: true }
    });
    return results.map(c => c.toJSON());
};

export const getById = async function (idEstado) {
    const result = await Estado.findOne({
        where: {
            id_estado: idEstado,
            estado: true
        }
    });
    return result ? result.toJSON() : null;
};

export const create = async function (objEstado) {
    try {
        const estado= await Estado.create({
            descripcion:objEstado.descripcion
        });
        console.log(estado);
        return estado.toJSON().id_estado;
    } catch (error) {
        console.log("Error al crear estado:", error);
        throw error;
    }
};

export const update = async function (idEstado, objEstado) {
    try{
            const [updatedRows]= await Estado.update({
                descripcion:objEstado.descripcion
            },{
                where:{
                    id_estado:idEstado
                }
            });
            console.log(updatedRows);
            return updatedRows;        
    } catch (error) {
        console.log("Error al actualizar estado:", error);
        throw error;
    }
};

export const deletes = async function (idEstado) {
    try {
        const [updatedRows] = await Estado.update({
            estado: false
        }, {
            where: { id_estado: idEstado }
        });
        return updatedRows;
    } catch (error) {
        console.log("Error al eliminar estado:", error);
        throw error;
    }
};
