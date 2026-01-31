
const empresaService = require("../services/empresa-constructora-services");

class EmpresaController {
  async getAllEmpresas(req, res) {
    try {
      const empresas = await empresaService.getAllEmpresas();
      return res.status(200).json({
        ok: true,
        datos: empresas,
        mensaje: "Empresas recuperadas correctamente",
      });
    } catch (err) {
      console.error("Error en getAllEmpresas:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al recuperar empresas",
      });
    }
  }

  async getEmpresaById(req, res) {
    const id_empresa = req.params.id;
    try {
      const empresa = await empresaService.getEmpresaById(id_empresa);
      if (empresa) {
        return res.status(200).json({
          ok: true,
          datos: empresa,
          mensaje: "Empresa encontrada",
        });
      } else {
        return res.status(404).json({
          ok: false,
          datos: null,
          mensaje: "No se ha encontrado la empresa",
        });
      }
    } catch (err) {
      console.error("Error en getEmpresaById:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al buscar la empresa",
      });
    }
  }

  async getEmpresasParametrizado(req, res) {
    const filtros = {
      activa: req.query.activa !== undefined ? Number(req.query.activa) === 1 : undefined,
    };
    try {
      const empresas = await empresaService.getEmpresasParametrizado(filtros);
      return res.status(200).json({
        ok: true,
        datos: empresas,
        mensaje: "Empresas recuperadas correctamente",
      });
    } catch (err) {
      console.error("Error en getEmpresasParametrizado:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al recuperar empresas",
      });
    }
  }

  async createEmpresa(req, res) {
    const data = req.body;
    try {
      const empresaNew = await empresaService.createEmpresa(data);
      return res.status(201).json({
        ok: true,
        datos: empresaNew,
        mensaje: "Empresa creada correctamente",
      });
    } catch (err) {
      console.error("Error en createEmpresa:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al crear la empresa",
      });
    }
  }

  async updateEmpresa(req, res) {
    const id_empresa = req.params.id;
    const data = req.body;
    try {
      const empresa = await empresaService.updateEmpresa(id_empresa, data);
      return res.status(200).json({
        ok: true,
        datos: empresa,
        mensaje: "Empresa actualizada correctamente",
      });
    } catch (err) {
      console.error("Error en updateEmpresa:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al actualizar la empresa",
      });
    }
  }

  async deleteEmpresa(req, res) {
    const id_empresa = req.params.id;
    try {
      const result = await empresaService.deleteEmpresa(id_empresa);
      return res.status(200).json({
        ok: true,
        datos: result,
        mensaje: "Empresa eliminada correctamente",
      });
    } catch (err) {
      console.error("Error en deleteEmpresa:", err);
      return res.status(500).json({
        ok: false,
        datos: null,
        mensaje: "Error al eliminar la empresa",
      });
    }
  }
}

module.exports = new EmpresaController();
