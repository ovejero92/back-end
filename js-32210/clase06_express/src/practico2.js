const express = require('express')

const app = express() 

const users = [
    {id:'1', nombre:'Carolina', apellido:'Perez', gender: 'F'},
    {id:'2', nombre:'Neri', apellido:'Perez'  ,gender: 'M'},
    {id:'3', nombre:'Natalia', apellido:'Perez'  ,gender: 'F'},
    {id:'4', nombre:'Gustavo', apellido:'Ovejero' , gender: 'M'},
    {id:'5', nombre:'Gabriel', apellido:'Ovejero',  gender: 'M'},
    {id:'6', nombre:'India', apellido:'Overez',  gender: 'F'},
]
// http://127.0.0.1:8080/?gender=F&ravar=02192&var234=123
app.get('/', (req, res) => {

   let gender = req.query.gender
    if(gender) {
        gender = gender.toUpperCase()
    if (gender == 'M' || gender == 'F') { 
        const userFilter = users.filter(u => u.gender == gender)
        return res.send({users: userFilter})
    } 
}
     res.send({users})
})

app.listen(8080, () => console.log('el servidor esta corriendo...'))