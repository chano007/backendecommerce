import {Sequelize, DataTypes} from 'sequelize';
import orm from '../config/sequelize.js';

export const Marca = orm.define("Marca", {
    id_marca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_marca: {
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
    tableName: 'tb_marca',
    timestamps: false
});

export const connect = async function () {
    await orm.authenticate();
    console.log("Conexión establecida");
};

export const getAll = async function () {
    const results = await Marca.findAll({
        where: { estado: true }
    });
    return results.map(c => c.toJSON());
};

export const getById = async function (idMarca) {
    const result = await Marca.findOne({
        where: {
            id_marca: idMarca,
            estado: true
        }
    });
    return result ? result.toJSON() : null;
};

export const create = async function (objtMarca) {
    try {
        const marca= await Marca.create({
            nombre_marca:objtMarca.nombre_marca
        });
        console.log(marca);
        return marca.toJSON().id_marca;
    } catch (error) {
        console.log("Error al crear marca:", error);
        throw error;
    }
};

export const update = async function (idMarca, objtMarca) {
    try{
            const [updatedRows]= await Marca.update({
                nombre_marca:objtMarca.nombre_marca
            },{
                where:{
                    id_marca:idMarca
                }
            });
            console.log(updatedRows);
            return updatedRows;        
    } catch (error) {
        console.log("Error al actualizar marca:", error);
        throw error;
    }
};

export const deletes = async function (idMarca) {
    try {
        const [updatedRows] = await Marca.update({
            estado: false
        }, {
            where: { id_marca: idMarca }
        });
        return updatedRows;
    } catch (error) {
        console.log("Error al eliminar marca:", error);
        throw error;
    }
};
