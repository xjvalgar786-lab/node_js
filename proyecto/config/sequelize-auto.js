const SequelizeAuto = require("sequelize-auto");
// Importar fichero de configuración con variables de entorno
const config = require('./config');

const auto = new SequelizeAuto(
  config.db.name, // nombre bd
  config.db.user, // usuario
  config.db.password, // password
  {
    host: config.db.host,
    port: config.db.port,
    dialect: "mysql",
    directory: "./models", 
    caseModel: 'c', 
    caseFile: "c", 
    additional: {
      timestamps: false,
     
    },
   
  }
);

auto.run().then((data) => {
  console.log(data.tables); 
  
  console.log(data.text); 
});
