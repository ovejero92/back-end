const express = require('express')

const app = express() 

const users = [
    {id:'1', nombre:'Carolina', apellido:'Perez'},
    {id:'2', nombre:'Neri', apellido:'Perez'},
    {id:'3', nombre:'Natalia', apellido:'Perez'}
]
app.get('/', (req, res) => res.send({users}))
app.get('/:iduser', (req, res) => {
    const idUser = req.params.iduser

    const user = users.find(u => u.id == idUser)
    if(!user) res.send({error: 'user not found'})
    else res.send({user})
})

app.listen(8080, () => console.log('el servidor esta corriendo...'))