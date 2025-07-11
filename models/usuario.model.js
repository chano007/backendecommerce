import {Sequelize, DataTypes} from 'sequelize';
import orm from '../config/sequelize.js';

export const Usuario = orm.define("Usuario", {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 45]
        }
    },
    password: {
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
    correo_usuario: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1, 100]
    }
}, 
nro_intentos: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        len: [1, 2]
}
},
otp: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        len: [1, 20]
}
},
rol: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
        len: [1, 30]
}
},
}, {
    freezeTableName: true,
    tableName: 'tb_usuario',
    timestamps: false
});

export const connect = async function () {
    await orm.authenticate();
    console.log("Conexión establecida");
};

export const getAll = async function () {
    const results = await Usuario.findAll({
        where: { estado: true }
    });
    return results.map(c => c.toJSON());
};

export const getById = async function (idUsuario) {
    const result = await Usuario.findOne({
        where: {
            id_usuario: idUsuario,
            estado: true
        }
    });
    return result ? result.toJSON() : null;
};

export const create = async function (objtUsuario) {
    try {
        const usuario= await Usuario.create({
            user:objtUsuario.user,
            password:objtUsuario.password,
            correo_usuario:objtUsuario.correo_usuario,
            nro_intentos:objtUsuario.nro_intentos,
            otp:objtUsuario.otp,
            rol:objtUsuario.rol
        });
        console.log(usuario);
        return usuario.toJSON().id_usuario;
    } catch (error) {
        console.log("Error al crear usuario:", error);
        throw error;
    }
};

export const update = async function (idUsuario, objtUsuario) {
    try{
            const [updatedRows]= await Usuario.update({
                password:objtUsuario.password,
                correo_usuario:objtUsuario.usuario,
                nro_intentos:objtUsuario.nro_intentos,
                otp:objtUsuario.otp,
                rol:objtUsuario.rol
            },{
                where:{
                    id_usuario:idUsuario
                }
            });
            console.log(updatedRows);
            return updatedRows;        
    } catch (error) {
        console.log("Error al actualizar usuario:", error);
        throw error;
    }
};

export const deletes = async function (idUsuario) {
    try {
        const [updatedRows] = await Usuario.update({
            estado: false
        }, {
            where: { id_usuario: idUsuario }
        });
        return updatedRows;
    } catch (error) {
        console.log("Error al eliminar usuario:", error);
        throw error;
    }
};
