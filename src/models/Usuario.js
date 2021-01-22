const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(connection){
       super.init({
           email: DataTypes.STRING,
           senha: DataTypes.STRING,
           nome_completo: DataTypes.STRING,
           cpf: DataTypes.BIGINT
       },
       {
           sequelize: connection
       }) 
    }
}

module.exports = Usuario;