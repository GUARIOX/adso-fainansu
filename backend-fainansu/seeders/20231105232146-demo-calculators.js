'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Calculators', [
      {
        name: 'Calculadora 1',
        icon: 'calculadora1.png',
        type: 'Tipo 1',
        UserId: 1, // Reemplaza con el ID de un usuario existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Calculadora 2',
        icon: 'calculadora2.png',
        type: 'Tipo 2',
        UserId: 2, // Reemplaza con el ID de otro usuario existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de calculadoras si es necesario
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Calculators', null, {});
  },
};