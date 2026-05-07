const app = req('./app')
const pool = req('./config/database')

const PORT = 3000

// Testando conexão
pool.getConnection((error, connection) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", error)
        process.exit(1)
    }

    console.log("Conexão com MySQL estabelecida! ✔️")
    connection.release()
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`)
})