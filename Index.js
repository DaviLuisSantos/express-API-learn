const express = require('express')
const app = express()
const port = 3000
var lista_de_usuarios = []

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/nome/all', (req, res) => {
  res.send(lista_de_usuarios)
})
app.get('/nome/:nome', (req, res) => {
  lista_de_usuarios.push({nome:req.params.nome,id:req.query.id}) 
  res.send("Olá, "+req.params.nome+" seu id é "+req.query.id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})