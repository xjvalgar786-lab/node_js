

const initModels = require("../models/init-models.js").initModels;
const sequelize = require("../config/sequelize.js");
const models = initModels(sequelize);
const Empresa = models.empresa_constructora;

class EmpresaService {
  async getAllEmpresas() {
    const result = await Empresa.findAll({
      include: { model: models.obra, as: "obras" } 
    });
    return result;
  }

  async getEmpresaById(id) {
    const result = await Empresa.findByPk(id, {
      include: { model: models.obra, as: "obras" }
    });
    return result;
  }

  async createEmpresa(data) {
    const result = await Empresa.create(data);
    return result;
  }

  async updateEmpresa(id, data) {
    await Empresa.update(data, { where: { id } });
    return await this.getEmpresaById(id);
  }

  async deleteEmpresa(id) {
    await Empresa.destroy({ where: { id} });
    return { message: "Empresa eliminada" };
  }
}

module.exports = new EmpresaService();
