'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    location: DataTypes.STRING,
    room_type_category: DataTypes.STRING,
    price: DataTypes.STRING,
    property_category: DataTypes.STRING,
    isDedicatedForGuests: DataTypes.BOOLEAN,
    isPartOfCompany: DataTypes.BOOLEAN,
    number_of_guest: DataTypes.INTEGER,
    available_bedrooms: DataTypes.INTEGER,
    available_beds: DataTypes.INTEGER,
    number_of_bathrooms: DataTypes.INTEGER,
    isBathroomPrivate: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Property.associate = function (models) {
  };
  return Property;
};