'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Registers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creation_date: {
        type: Sequelize.DATEONLY, // Utiliza Sequelize.DATEONLY para fechas sin hora
      },
      creation_time: {
        type: Sequelize.TIME,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2), // Utiliza Sequelize.DECIMAL para valores numéricos
      },
      description: {
        type: Sequelize.STRING, // Utiliza Sequelize.STRING para cadenas de caracteres
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Registers');
  }
};