'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accommodation', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      tv: {
        type: Sequelize.BOOLEAN
      },
      heat: {
        type: Sequelize.BOOLEAN
      },
      place_type: {
        type: Sequelize.STRING
      },
      guest_number: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Accommodation');
  }
};