
const { Sequelize } = require("sequelize");

const config = require("./config");


const sequelize = new Sequelize(
  config.db.name, 
  config.db.user,
  config.db.password, 
  {
   
    host: config.db.host, 
    port: config.db.port, 
    dialect: "mysql", 
    
    logging: (msg) => {
      if (msg.includes("ERROR")) {
        console.error("Error de Sequelize:", msg);
      }
    },
  }
);


(async () => {
  try {
    await sequelize.authenticate();
    if (process.env.NODE_ENV !== "test") {
      console.log("Conexión exitosa a la base de datos MySQL");
    }
  } catch (error) {
    console.error("Error de conexión:", error);
  }
})();

module.exports = sequelize; 
