'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Usuario 1',
        email: 'usuario1@example.com',
        password: 'contrasena1',
        country: 'País 1',
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Usuario 2',
        email: 'usuario2@example.com',
        password: 'contrasena2',
        country: 'País 2',
        CurrencyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de usuarios si es necesario
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
