const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const pacientes = []
const medicos = []

app.post('/pacientes/cadastro', (request, response) => {
    const validarPacientes = pacientes.find((validacao) => validacao.cpf == request.body.cpf)
        if (validarPacientes){
            return response.send("Status: Paciente já Existe.")}
        
        pacientes.push({
        id: uuid.v4(),
        nome: request.body.Nome,
        cpf: request.body.cpf,
        senha:request.bory.senha
    })
    return response.send("Status: Paciente cadastrado com sucesso.")
})

app.post('/Medicos/cadastrar', (request, response) => {
    const validarMedico = medicos.find((medicos) => medicos.crm == request.body.crm)
        if (validarMedico){
            return response.send("Erro: Medico ja existe.")}
        
        medicos.push({
        id: uuid.v4(),
        nome: request.body.nome,
        crm: request.body.crm,
        senha: request.body.senha
    })
    return response.send("Medico cadastrado com sucesso.")
})
app.post('/login/pacientes', (request, response) => {
    console.log(request.body);
    if (request.body.cpf == request.body.cpf && request.body.senha == request.body.senha){
        return response.send("Logado: seja bem vindo")
    }
    else  {
        return response.send("erro: Cpf ou Senha incorretos")
    }
})

app.post('/login/medicos', (request, response) => {
    const loginMedicos = medicos.find((med) => med.crm == request.body.crm && med.senha == request.body.senha)
    if(loginMedicos){
        return response.send("status: Seja bem vindo")
    }
    else{
        return response.send("erro: Crm ou Senha incorretos")
    }
    })
app.get('/listar/pacientes', (request, response) => {
    console.log(request.body);
    return response.json(pacientes)
})

app.get('/listar/medicos', (request, response) => {
    console.log(request.body);
    return response.json(medicos)
})

app.delete('/excluir', (request,response) => {
    const id = pacientes.indexOf('id');
    const excluirPacientes = pacientes.splice(id,1)
        
    return response.send(excluirPacientes)
})

app.delete('/excluir', (request,response) => {
    const id = medicos.indexOf('id');
    const excluirMedicos = medicos.splice(id,1)
        
    return response.send(excluirMedicos)
})

app.listen(4000, () => {
    console.log('Status: Servidor Online.')
})