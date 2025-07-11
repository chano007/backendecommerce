import {Sequelize, DataTypes} from 'sequelize';
import orm from '../config/sequelize.js';

export const Cliente = orm.define("Cliente", {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_cliente: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    },
    apellidos_cliente: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    },
    dni_cliente: {
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
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 100]
        }
    },
    ubigeo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 100]
        }
    }
}, {
    freezeTableName: true,
    tableName: 'tb_cliente',
    timestamps: false
});

export const connect = async function () {
    await orm.authenticate();
    console.log("Conexión establecida");
};

export const getAll = async function () {
    const results = await Cliente.findAll({
        where: { estado: true }
    });
    return results.map(c => c.toJSON());
};

export const getById = async function (idCliente) {
    const result = await Cliente.findOne({
        where: {
            id_cliente: idCliente,
            estado: true
        }
    });
    return result ? result.toJSON() : null;
};

export const create = async function (objCliente) {
    try {
        const cliente= await Cliente.create({
            nombre_cliente:objCliente.nombre_cliente, 
            apellidos_cliente:objCliente.apellidos_cliente, 
            dni_cliente:objCliente.dni_cliente, 
            estado:objCliente.estado, 
            direccion:objCliente.direccion,
            ubigeo: objCliente.ubigeo 
        });
        console.log(cliente);
        return cliente.toJSON().id_cliente;
    } catch (error) {
        console.log("Error al crear cliente:", error);
        throw error;
    }
};

export const update = async function (idCliente, objCliente) {
    try{
            const [updatedRows]= await Cliente.update({
                nombre_cliente:objCliente.nombre_cliente, 
                apellidos_cliente:objCliente.apellidos_cliente,
                direccion:objCliente.direccion,
                ubigeo: objCliente.ubigeo 
            },{
                where:{
                    id_cliente:idCliente
                }
            });
            console.log(updatedRows);
            return updatedRows;        
    } catch (error) {
        console.log("Error al actualizar cliente:", error);
        throw error;
    }
};

export const deletes = async function (idCliente) {
    try {
        const [updatedRows] = await Cliente.update({
            estado: false
        }, {
            where: { id_cliente: idCliente }
        });
        return updatedRows;
    } catch (error) {
        console.log("Error al eliminar cliente:", error);
        throw error;
    }
};
