const { Model, DataTypes } = require('sequelize');

class Status extends Model {
    static init(connection){
        super.init({
            descricao: DataTypes.STRING
        },
        {
            sequelize: connection,
            createdAt: 'criadoEm',
            updatedAt: 'atualizadoEm',
            timestamps: true,
            underscored: false,
            freezeTableName: true,
            tableName: 'status'
        }) 
     }
}

module.exports = Status;