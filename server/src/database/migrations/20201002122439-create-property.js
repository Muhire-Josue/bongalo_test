'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      room_type_category: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      property_category: {
        type: Sequelize.STRING
      },
      isDedicatedForGuests: {
        type: Sequelize.BOOLEAN
      },
      isPartOfCompany: {
        type: Sequelize.BOOLEAN
      },
      number_of_guest: {
        type: Sequelize.INTEGER
      },
      available_bedrooms: {
        type: Sequelize.INTEGER
      },
      available_beds: {
        type: Sequelize.INTEGER
      },
      number_of_bathrooms: {
        type: Sequelize.INTEGER
      },
      isBathroomPrivate: {
        type: Sequelize.BOOLEAN
      },
      userId:{
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Properties');
  }
};