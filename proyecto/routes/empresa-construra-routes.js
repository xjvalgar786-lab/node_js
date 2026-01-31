
const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresa-constructora-controller');

// Listar todas las empresas
router.get('/', empresaController.getAllEmpresas);

// Obtener empresa por ID
router.get('/:id', empresaController.getEmpresaById);

//listado parametrizado
router.get('/filter', empresaController.getEmpresasParametrizado);

// Crear empresa
router.post('/', empresaController.createEmpresa);

// Actualizar empresa (opcional)
router.put('/:id', empresaController.updateEmpresa);

// Eliminar empresa (opcional)
router.delete('/:id', empresaController.deleteEmpresa);

module.exports = router;
