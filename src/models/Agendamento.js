const { Model, DataTypes } = require('sequelize');

class Agendamento extends Model {
    static init(connection){
       super.init({
           dataHora: DataTypes.DATE,
           idUsuario: DataTypes.BIGINT,
           idTipo: DataTypes.BIGINT,
           idStatus: DataTypes.BIGINT,
           observacao: DataTypes.STRING
       },
       {
           sequelize: connection,
           createdAt: 'criadoEm',
           updatedAt: 'atualizadoEm',
           timestamps: true,
           underscored: false,
           freezeTableName: true,
           tableName: 'agendamento'
       }) 
    }
}

module.exports = Agendamento;
