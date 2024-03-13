'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('solicitacaos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nome_solicitante: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc_item: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco_produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      solicitacao_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('requests');
  }
};
