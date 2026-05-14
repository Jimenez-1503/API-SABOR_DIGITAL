const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.json())

app.use('/', routes)

// function query(sql, values = []) {
//     return new Promise((resolve, reject) => {
//         pool.query(sql, values, (err, result) => {
//             if (err) reject(err)     // se der erro, retorna erro
//             else resolve(result)     // se der certo, retorna resultado
//         })
//     })
// }

// // USUÁRIOS

// const validarExistencia = (resultado, res, tipo) => {
//     if(resultado.length == 0){
//         res.status(404).json({
//             sucesso: false,
//             mensagem: `${tipo} não encontrado(a).`
//         })
//         return false
//     } 
//     return true
// }

// // Rota para buscar TODOS os usuários
// app.get('/users', async (req, res) => {
//     try {
        
//         // Executa o SELECT no banco
//         const listarUsuarios = await query("SELECT * FROM usuario")

//         // Retorna os usuários

//         res.status(200).json({
//             sucesso: true,
//             dados: listarUsuarios
//         })
        

//     } catch (erro) {

//         // Caso dê erro no banco
//         res.status(500).json({
//             sucesso: false,
//             mensagem: erro.message
//         })
//     }
// })

// // Rota para buscar UM usuário pelo ID
// app.get('/users/:id', async (req, res) => {
//     try {

//         // Pega o ID da URL
//         const {id}= req.params

//         // Busca no banco usando o ID
//         const usuario = await query( "SELECT * FROM usuario WHERE id = ?",[id])

//         // Se não encontrou nenhum usuário
//        if (!validarExistencia(usuario, res, "Usuário")){
//         return

//      }

//         // Retorna o primeiro usuário encontrado
//         res.status(200).json(usuario[0])

//     } catch (err) {
//         res.status(500).json({ 
//             error: "Erro ao buscar usuário" 
//         })
//     }
// })

// // PEDIDOS

// // Rota para criar um novo pedido

// const validarDadosPedido = (cliente, valor) => {
//     if(!cliente || valor === undefined){
//         return"Cliente e valor são obrigatórios."
//     }

//     if(typeof valor !== 'number' || valor <= 0){
//         return "valor inválido"
//     }
//     return null
// }
// app.post('/orders', async (req, res) => {
//     try {

//         // Pega dados enviados no body
        
//         const { cliente, valor } = req.body
//         const erro = validarDadosPedido(cliente, valor)

//         if(erro){
//             return res.status(400).json({
//                 sucesso: false,
//                 mensagem: erro
//             })
//         }

//         // Insere o pedido no banco
//         await query( "INSERT INTO pedido SET ?", [req.body])

//         // Retorna sucesso com o ID criado
//         res.status(201).json({
//             sucesso: true,
//             mensagem: "Pedido criado",
    
//         })
//     } catch (erro) {
//         res.status(500).json({ 
//             error: "Erro ao criar pedido" 
//         })
//     }
// })

// // SALAS

// // Rota para ATUALIZAR uma sala

// const validarDadosAtualizados = (dados, res) => {
//     if(Object.keys(dados).length === 0){
//             return res.status(400).json({
//                 sucesso: false,
//                 mensagem: "Nenhum dado enviado"
//             })

//             return false
//         }
        
//         return true
// }

// app.put('/rooms/:id', async (req, res) => {
//     try {
//         const {id} = req.params
//         const dados = req.body

//         // Verifica se a sala existe

//         const room = await query("SELECT * FROM sala WHERE id = ?",[id])

//         // Se não existir

//         if (!validarExistencia(room, res, "Sala")){
//             return
//         }
        
//         if(!validarDadosAtualizados(dados, res)){
//             return
//         }

//         // Atualiza os dados da sala

//         await query( "UPDATE sala SET ? WHERE id = ?",[dados, id])

//         res.status(200).json({
//             sucesso: true,
//             mensagem: "Sala atualizada" 
//         })

//     } catch (err) {
//         res.status(500).json({ 
//             error: "Erro ao atualizar sala" 
//         })
//     }
// })

// // Rota para DELETAR uma sala

// app.delete('/rooms/:id', async (req, res) => {
//     try {
//         const {id} = req.params

//         // Verifica se a sala existe
//         const room = await query("SELECT * FROM sala WHERE id = ?",[id])

//         // Se não existir
//         if (!validarExistencia(room, res, "Sala")){
//             return
//         }

//         // Deleta a sala do banco
//         await query("DELETE FROM sala WHERE id = ?",[id])

//         res.status(200).json({ 
//             sucesso: true,
//             mensagem: "Sala deletada" 
//         })

//     } catch (err) {
//         res.status(500).json({
//              error: "Erro ao deletar sala" 
//             })
//     }
// })

// // Exporta o app para usar em outro arquivo

module.exports = app