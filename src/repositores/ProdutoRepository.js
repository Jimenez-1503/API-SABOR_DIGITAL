//Faz a conexão com o banco de dados mySQL

const pool = require('../config/database')

class ProdutorodutoRepository {
    async listarProdutos(){
        const listarProdutos = await pool.query('SELECT * FROM produto'); // salvar variavel

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
        const camposProdutos = []
        const values = []

        for(const [key, value] of Object.entries (dadosDoProduto)){
            camposProdutos.push(`${key} = ?`)
            dadosDoProduto.push(value)
        }

        if(camposProdutos.length === 0) return null 

        dadosDoProduto.push(id)

        const query = `UPDATE produto SET ${camposProdutos.join(',')}`

        const resultado = await pool.query(query, dadoProduto)

        return resultado.affectedRows

    }

    async deletarProduto(id){
        await pool.query('DELETE produto WHERE id = ?', [id]) //sem salvar variavel

        return true
    }

    }