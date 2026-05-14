const express = require('express');
const router = express.Router();
const CardapioController = require('../controllers/CardapioController');

router.get('/', CardapioController.listarCardapio);
router.get('/:id', CardapioController.buscarCardapioPorId);
router.post('/', CardapioController.cadastroCardapio);
router.delete('/:id', CardapioController.removerCardapio);

module.exports = router;
