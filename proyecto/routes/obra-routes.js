
const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obra-controller');

// Listar todas las obras
router.get('/', obraController.getAllObras);

// Obtener obra por ID
router.get('/:id', obraController.getObraById);

//listado parametrizado
router.get('/filter', obraController.getObrasParametrizado);

// Crear obra
router.post('/', obraController.createObra);

// Actualizar obra (opcional)
router.put('/:id', obraController.updateObra);

// Eliminar obra 
router.delete('/:id', obraController.deleteObra);

module.exports = router;
