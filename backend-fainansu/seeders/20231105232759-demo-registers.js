'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registers', [
      {
        creation_date: '2023-11-10',
        creation_time: '08:30:00',
        amount: 100.50,
        description: 'Registro 1',
        UserId: 1, // Reemplaza con el ID de un usuario existente
        CategoryId: 1, // Reemplaza con el ID de una categoría existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        creation_date: '2023-11-11',
        creation_time: '14:45:00',
        amount: 75.25,
        description: 'Registro 2',
        UserId: 2, // Reemplaza con el ID de otro usuario existente
        CategoryId: 2, // Reemplaza con el ID de otra categoría existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de "Registers" si es necesario
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Registers', null, {});
  },
};
