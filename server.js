const express = require('express');

var app = express();

app.use('/', (req,res) => {
    res.send("Mi servidor para conectarme a MONGODB")
})

app.listen(3000);
console.log(':a aplicacion esta en http://localhost:3000');