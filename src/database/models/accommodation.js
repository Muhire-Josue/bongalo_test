'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    wifi: DataTypes.BOOLEAN,
    tv: DataTypes.BOOLEAN,
    heat: DataTypes.BOOLEAN,
    place_type: DataTypes.STRING,
    guest_number: DataTypes.STRING
  }, {});
  Accommodation.associate = function(models) {
    // associations can be defined here
  };
  return Accommodation;
};