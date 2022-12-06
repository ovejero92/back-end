const express = require('express')

const app = express() 

app.get('/saludos', (req , res) => {

    console.log(req.query);

    const edad = req.query.edad
res.send(`la edad es ${edad} years`)
})


app.listen(8080, () => console.log('el servidor esta corriendo...'))