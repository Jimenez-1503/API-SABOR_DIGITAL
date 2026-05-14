const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController');

router.post('/', PedidoController.criarPedido);
router.get('/', PedidoController.buscarPedido);
router.get('/:id', PedidoController.buscarPedidoPorId);
router.patch('/:id/status', PedidoController.atualizarStatusPedido);
router.delete('/:id', PedidoController.deletarPedido);

module.exports = router;
