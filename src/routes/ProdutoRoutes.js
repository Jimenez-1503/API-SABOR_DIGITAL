const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

router.get('/', ProdutoController.listarProduto)
router.get('/:id', ProdutoController.buscarProdutoPorID)
router.post('/', ProdutoController.cadastrarProduto)
router.put('/:id',ProdutoController.atualizacaoProduto)
router.delete('/:id',ProdutoController.removerProduto)

module.exports = router 