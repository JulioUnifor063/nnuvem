const express = require("express");
const app = express();


app.get ("/", function(req,res){
    res.send("Teste de funcionalidade");
})

app.get ("/produtos" , function(req,res){
    res.send("<h1> Lista de produtos!<h1>");
})

app.get ("/consulta/:parametro" , function(req,res) {
    res.send("Retorno consulta:" + req.params.parametro);
})

app.get ("/cadastro/:nome", function(req,res){
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>produto " + nome + " criado <h1>");
    }else{
        res.send("Peoduto criado!");
    }
})


app.listen(4000,function (erro){
    if (erro){
        console.log("Erro ao iniciar")
    }else{
        console.log("Servidor iniciado");
    }
})