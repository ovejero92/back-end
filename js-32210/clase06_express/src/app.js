const express = require('express')

const app = express() 

app.get('/saludos', (request , response) => {
   response.send('Saludos desde express para Gustavo!!!')
})

app.listen(8080, () => console.log('el servidor esta corriendo...'))