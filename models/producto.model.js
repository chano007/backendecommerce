import {Sequelize, DataTypes} from 'sequelize';
import orm from '../config/sequelize.js';
import {Marca} from './marca.model.js';

export const Producto = orm.define("producto", {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_marca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        validate: {
            isInt: true
        },
        references:{
            model:Marca,
            Key:'id_marca'
        }
    },
    nombre_producto: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    },
    precio_producto: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: {
            isDecimal: true
        }
    },
    descripcion_producto: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 100]
        }
    },
    stock_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
}, {
    freezeTableName: true,
    tableName: 'tb_producto',
    timestamps: false
});

Marca.hasMany(Producto, {foreignKey:'id_marca'});
Producto.belongsTo(Marca, {foreignKey:'id_marca'});

export const connect = async function () {
    await orm.authenticate();
    console.log("Conexión establecida");
};

export const getAll = async function () {
    const results = await Producto.findAll({
        include:[Marca],
        where: { estado: true }
    });
    return results.map(c => c.toJSON());
};

export const getById = async function (idProducto) {
    const result = await Producto.findOne({
        include:[Marca],
        where: {
            id_producto: idProducto,
            estado: true
        }
    });
    return result ? result.toJSON() : null;
};

export const create = async function (objtProducto) {
    try {
        const producto= await Producto.create({
            id_marca:objtProducto.id_marca,
            nombre_producto:objtProducto.nombre_producto,
            precio_producto:objtProducto.precio_producto,
            descripcion_producto:objtProducto.descripcion_producto,
            stock_producto:objtProducto.stock_producto
        });
        console.log(producto);
        return producto.toJSON().id_producto;
    } catch (error) {
        console.log("Error al crear producto:", error);
        throw error;
    }
};

export const update = async function (idProducto, objtProducto) {
    try{
            const [updatedRows]= await Producto.update({
                nombre_producto:objtProducto.nombre_producto,
                precio_producto:objtProducto.precio_producto,
                descripcion_producto:objtProducto.descripcion_producto,
                stock_producto:objtProducto.stock_producto
            },{
                where:{
                    id_producto:idProducto
                }
            });
            console.log(updatedRows);
            return updatedRows;        
    } catch (error) {
        console.log("Error al actualizar producto:", error);
        throw error;
    }
};

export const deletes = async function (idProducto) {
    try {
        const [updatedRows] = await Producto.update({
            estado: false
        }, {
            where: { id_producto: idProducto }
        });
        return updatedRows;
    } catch (error) {
        console.log("Error al eliminar producto:", error);
        throw error;
    }
};

export const updateArchivo = async function(ID_PRODUCTO, filename) {
    try{
        const [updatedRows]= await Producto.update({
            archivo:filename
        },{
            where:{
                ID_PRODUCTO:ID_PRODUCTO
            }
        });
        console.log(updatedRows);
        return updatedRows;
    }catch(error){
        console.log("excepcion...");
        console.log(error);
        throw error;
    }
};