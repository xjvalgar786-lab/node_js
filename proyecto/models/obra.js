const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    presupuesto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    finalizada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    empresaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'empresa_constructora',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'obra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }]
      },
      {
        name: "empresaId",
        using: "BTREE",
        fields: [{ name: "empresaId" }]
      }
    ]
  });
};
