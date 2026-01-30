
const obraService = require("../services/obra-services");

class ObraController {
  async getAllObras(req, res) {
    try {
      const filters = {
        finalizada: req.query.finalizada !== undefined ? req.query.finalizada === 'true' : undefined,
        id: req.query.id
      };
      const obras = await obraService.getAllObras(filters);
      return res.status(200).json({
        ok: true,
        datos: obras,
        mensaje: "Obras recuperadas correctamente",
      });
    } catch (err) {
      console.error("Error en getAllObras:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al recuperar obras",
      });
    }
  }

  async getObraById(req, res) {
    const id = req.params.id;
    try {
      const obra = await obraService.getObraById(id);
      if (obra) {
        return res.status(200).json({
          ok: true,
          datos: obra,
          mensaje: "Obra encontrada",
        });
      } else {
        return res.status(404).json({
          ok: false,
          datos: null,
          mensaje: "No se ha encontrado la obra",
        });
      }
    } catch (err) {
      console.error("Error en getObraById:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al buscar la obra",
      });
    }
  }

  async createObra(req, res) {
    const data = req.body;
    try {
      const obraNew = await obraService.createObra(data);
      return res.status(201).json({
        ok: true,
        datos: obraNew,
        mensaje: "Obra creada correctamente",
      });
    } catch (err) {
      console.error("Error en createObra:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al crear la obra",
      });
    }
  }

  async updateObra(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
      const obra = await obraService.updateObra(id, data);
      return res.status(200).json({
        ok: true,
        datos: obra,
        mensaje: "Obra actualizada correctamente",
      });
    } catch (err) {
      console.error("Error en updateObra:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al actualizar la obra",
      });
    }
  }

  async deleteObra(req, res) {
    const id = req.params.id;
    try {
      const result = await obraService.deleteObra(id);
      return res.status(200).json({
        ok: true,
        datos: result,
        mensaje: "Obra eliminada correctamente",
      });
    } catch (err) {
      console.error("Error en deleteObra:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al eliminar la obra",
      });
    }
  }
}

module.exports = new ObraController();
