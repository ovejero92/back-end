 import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'

const app = express()

app.use(express.static(__dirname + '/public'))

// Inicializamos el Motor de Pantalla:

app.engine('handlebars',  handlebars.engine())

// Indicamos dnd estan las vistas:

app.set('views',__dirname + '/views')

// Iniciamos que motor de pantalla usar:
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

const server = app.listen(8080)