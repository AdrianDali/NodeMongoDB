const express = require('express')
const response = require('./../response')
const router = express.Router();

router.get('/info-user',(req,res) => {
    //mandamos nostros un header
    //res.header({"custom-header" : "Nuestro valor personalizado",})
    
   /* res.json({
        first_name: "Adrian Dali sos",
        last_name: "Hernandez Rueda sds",
        num_cuenta: 317053766 ,
    })*/

    
    //201 es de creado
   // res.status(201).send();
   // res.status(201).send({error : '' , body: 'Creado correctamente'});
   if(req.query.error == "ok "){
       response.error(req,res,'errkkkkkor',201)
   }else{
   response.success(req,res,"creado correctamente", 203)
   }

    
    //con esto se puede ver la informacion de quien se conecto a nuestra api
    console.log(req.headers)
})

router.delete('/message' ,(req,res) => {
    //para recibir parametros como querys "?orderBy=id"
    console.log(req.query);
    //lo que venga en el json como objeto
    console.log(req.body);
    res.send('borrado')
})

module.exports = router;