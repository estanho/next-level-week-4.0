import express from 'express';

const app = express();

/*
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
*/


// https://localhost:3333/users

app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW 4.0" });
});

// 1 Params => Rota (Recurso API)
// 2 Params => request, response

app.post("/", (resquest, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));