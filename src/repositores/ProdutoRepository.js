//Faz a conexão com o banco de dados mySQL

const pool = require('../config/database')

class ProdutorodutoRepository {
    async listarProdutos(){
        const listarProdutos = await pool.query('SELECT * FROM produto'); // salvar variael
        return listarProdutos
    }

    async buscarProdutoPorID(id){
        const mostrarProduto = await pool.query('SELECT * FROM produto WHERE id = ?', [id])
        return mostrarProduto[0]
    }

    async cadastrarProduto(dadosDoProduto){
        const concluirCadastro = await pool.query('INSERT INTO protudo * SET?', [dadosDoProduto])
        return resultadoCadastro.insertId

    }

    async atualizarProdutos(id, dadosDoProduto){
        const produtoAtualizado = await pool.query('UPDATE produto SET ? WHERE id = ?' [dadosDoProduto, id])
        return produtoAtualizado
    }

    async deletarProduto(id){
        await pool.query('DELETE produto WHERE id = ?', [id]) //sem salvar variavel

        return true
    }

    }