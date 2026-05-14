const ProdutoService = require('../services/ProdutoService')

class ProdutoController{

    async listarProduto(req, res){
        try{
            const resultado = await ProdutoService.listarProdutos()
            res.status(200).json(resultado)// res.json(resultado)

        } catch(erro){
            res.status(500).json({ //res.status(erro ou 500)
                status: false,
                mensagem: erro.mensagem, // 'Erro interno no servidor'
                erro: erro.stack // erro
            })
        }
    }

    async buscarProdutoPorID(req, res){
        try{
            const resultado = await ProdutoService.buscarProdutoPorId(req.params.id)
            res.json(resultado)

        } catch(erro){
            res.status(500).json({ //res.status(erro ou 500)
                status: false,
                mensagem: erro.mensagem, // 'Erro interno no servidor'
                erro: erro.stack // erro
            })
        }
    
    }

    async cadastrarProduto(req, res){
        try{
            const resultado = await ProdutoService.cadastrarProduto(req.body)
            res.json(resultado)
        }catch(erro){
            res.status(500).json({ //res.status(erro ou 500)
                status: false,
                mensagem: erro.mensagem, // 'Erro interno no servidor'
                erro: erro.stack // erro
            })
        }
    }

    async atualizacaoProduto(req, res){
        try{
            const resultado = await ProdutoService.atualizarProduto(req.params.id, req.body)
            res.json(resultado)

        }catch(erro){
            res.status(500).json({ //res.status(erro ou 500)
                status: false,
                mensagem: erro.mensagem, // 'Erro interno no servidor'
                erro: erro.stack // erro
            })

        }
    }

    async removerProduto(req, res){
        try{
            const resultado = await ProdutoService.deletarProduto(req.params.id)
            res.json(resultado)
        }catch(erro){
            res.status(500).json({ //res.status(erro ou 500)
                status: false,
                mensagem: erro.mensagem, // 'Erro interno no servidor'
                erro: erro.stack // erro
            })

        }
    }
}

module.exports = new ProdutoController()