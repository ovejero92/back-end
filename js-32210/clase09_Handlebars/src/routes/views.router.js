import express from 'express'

const router = express.Router()

const foods = [
    {name: "banana", price:"10"},
    {name: "wine", price:"150"},
    {name: "Hot dogs", price:"100"},
    {name: "Hamburgers", price:"110"},
    {name: "beers", price:"75"},
]

router.get('/', (req, res) => {

    
    let userAleatorio = Math.floor(Math.random() * 4)

    console.log(userAleatorio)

    const users = [
        {
        name: 'Carolina',
        lastname: 'Perez',
        role: "admin"
 },
 {
    name: 'Gustavo',
    lastname: 'Ovejero',
    role: "admin"
},
{
    name: 'Gabriel',
    lastname: 'Ovejero',
    role: "admin"
},
{
    name: 'Natalia',
    lastname: 'Perez',
    role: "admin"
},

    ]
   
 

    res.render('index', {
        user: users[userAleatorio],
        estilo: 'index.css',
        isAdmin: users[userAleatorio].role == 'admin',
        foods
    })
})

export default router