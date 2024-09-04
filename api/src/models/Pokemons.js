const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    name: { type: DataTypes.STRING, allowNull: false, },
    image: { type: DataTypes.STRING, allowNull: false, },
    life: { type: DataTypes.STRING, allowNull: false, },
    attack: { type: DataTypes.STRING, allowNull: false, },
    defense: { type: DataTypes.STRING, allowNull: false, },
    speed: { type: DataTypes.STRING, },
    height: { type: DataTypes.STRING, },
    weight: { type: DataTypes.STRING, }
  }, { timestamps: false });
};
