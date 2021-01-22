'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('agendamento', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      dataHora: {
        type: Sequelize.DATE,
        allowNull: false
      },
      idUsuario: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'usuarios',
          },
          key: 'id'
        },
       },

       idTipo:{
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: {
              tableName: 'tipoagendamento',
            },
            key: 'id'
          },
       },
       idStatus: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'status',
          },
          key: 'id'
        },
     },
       observacao: {
         type: Sequelize.STRING,
         allowNull: false
       },
       criadoEm: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      atualizadoEm: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
      });
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('agendamento');

  }
};
