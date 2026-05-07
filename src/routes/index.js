const express = require('express')
const router = express.Router()
const produtoRoutes = require('./ProdutoRoutes') //o index vai trabalhar com o routes

router.get('/', (req, res) =>{
    res.json({
        mensagem: 'API Sabor Digital',
        versao: '5.0.8'
    })
})

router.use('/produtos', produtoRoutes)
// router.use('/pedidos', pedidosRoutes)
// router.use('/cardapios', cardapiosRoutes)

module.exports = router;