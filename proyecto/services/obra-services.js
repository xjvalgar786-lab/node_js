

const initModels = require("../models/init-models.js").initModels;
const sequelize = require("../config/sequelize.js");
const models = initModels(sequelize);
const Obra = models.obra;

class ObraService {
  async getAllObras(filters = {}) {
   
    const where = {};
    if (filters.finalizada !== undefined) where.finalizada = filters.finalizada;
    if (filters.id_empresa) where.id_empresa = filters.id_empresa;

    const result = await Obra.findAll({
      where,
      include: { model: models.empresa_constructora, as: "empresa" }
    });
    return result;
  }

  async getObraById(id) {
    const result = await Obra.findByPk(id, {
      include: { model: models.empresa_constructora, as: "empresa" }
    });
    return result;
  }

  async getObrasParametrizado(filtros) {
    const where = {};
    if (filtros.finalizada !== undefined) where.finalizada = filtros.finalizada;
    if (filtros.empresaId !== undefined) where.empresaId = filtros.empresaId;
    const result = await Obra.findAll({ where });
    return result;
  }

  async createObra(data) {
    const result = await Obra.create(data);
    return result;
  }

  async updateObra(id, data) {
    await Obra.update(data, { where: { id } });
    return await this.getObraById(id);
  }

  async deleteObra(id) {
    await Obra.destroy({ where: { id } });
    return { message: "Obra eliminada" };
  }
}

module.exports = new ObraService();
