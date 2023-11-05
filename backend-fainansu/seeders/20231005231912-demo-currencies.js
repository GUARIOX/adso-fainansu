'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Currencies', [
      {
        type: 'Dólar',
        logo: 'dolar.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Euro',
        logo: 'euro.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de monedas si es necesario
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Currencies', null, {});
  },
};
