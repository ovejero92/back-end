import express  from "express"
import usersRouter from './routes/user.router.js'
import petsRouter from './routes/pet.router.js'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true})) //codifica en formato json. 
app.use(express.static('pubic'))

app.use(function(req,res, next) {
    console.log('time:', new Date().toLocaleDateString());

    next()
})


app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)


app.listen(8080)