'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('tipoagendamento', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        descricao: {
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
      await queryInterface.dropTable('tipoagendamento');
  }
};
