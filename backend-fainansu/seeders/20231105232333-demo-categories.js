'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name_ctg: 'Categoría 1',
        icon: 'icono1.png',
        type: 'Tipo 1',
        UserId: 1, // Reemplaza con el ID de un usuario existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_ctg: 'Categoría 2',
        icon: 'icono2.png',
        type: 'Tipo 2',
        UserId: 2, // Reemplaza con el ID de otro usuario existente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de categorías si es necesario
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
