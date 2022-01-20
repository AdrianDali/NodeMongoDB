const express = require('express');
const routerApi = require('./routes/index')

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    res.send("Mi servidor para conectarme a MONGODB")
})

app.get('/nueva-ruta',(req, res) =>{
    res.send("Hola mi nueva ruta");
  
  })

routerApi(app)

app.listen(3000);
console.log(':a aplicacion esta en http://localhost:3000');