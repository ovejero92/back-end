const express = require('express')

const app = express() 

app.get('/saludos/:nombre', (req , res) => {
console.log(req.params);
const nombre = req.params.nombre
res.send(`saludos a ${nombre} `)
})

app.get('/saludos/:nombre/:apellido', (req , res) => {
    console.log(req.params);
    const nombre = req.params.nombre
    const apellido = req.params.apellido
    res.send(`saludos a ${nombre} ${apellido}`)
    })
    

app.listen(8080, () => console.log('el servidor esta corriendo...'))