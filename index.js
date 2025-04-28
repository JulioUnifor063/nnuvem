const express = require("express"); // importa o módulo express
const app = express(); // inicia o express

// Middleware para permitir que o servidor interprete JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota inicial
app.get("/", (req, res) => {
    res.send("<h1>Bem-vindo ao meu site!</h1>");
});

// Rota de listagem de produtos
app.get("/produtos", (req, res) => {
    res.json({
        mensagem: "Lista de Produtos!",
        produtos: [] // aqui futuramente você pode retornar um array real
    });
});

// Rota de consulta com parâmetro
app.get("/consulta/:parametro", (req, res) => {
    const parametroRecebido = req.params.parametro;
    res.json({
        mensagem: "Retorno da consulta",
        parametro: parametroRecebido
    });
});

// Middleware de tratamento de erro genérico (pega qualquer erro não tratado)
app.use((err, req, res, next) => {
    console.error("Erro capturado:", err.stack);
    res.status(500).send("Algo deu errado no servidor.");
});

// Inicialização do servidor
app.listen(process.env.PORT ?? 3000, (erro) => {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor iniciado.");
    }
});