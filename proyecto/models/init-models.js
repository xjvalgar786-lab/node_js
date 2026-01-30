var DataTypes = require("sequelize").DataTypes;
var _empresa_constructora = require("./empresa-constructora");
var _obra = require("./obra");

function initModels(sequelize) {
  var empresa_constructora = _empresa_constructora(sequelize, DataTypes);
  var obra = _obra(sequelize, DataTypes);

  // Relación 1:N
  obra.belongsTo(empresa_constructora, { as: "empresa", foreignKey: "id" });
  empresa_constructora.hasMany(obra, { as: "obras", foreignKey: "id" });

  return {
    empresa_constructora,
    obra,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
