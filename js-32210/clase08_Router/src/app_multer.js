import express  from "express"
import multer from 'multer'


const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true})) //codifica en formato json. 
app.use('/static', express.static('public'))

// configuracion multer  
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/')
    },
    filename: function(req,file, cb) {
        cb(null , file.originalname)
    }
})
const uploader = multer({storage})

app.post('/' , uploader.single('file'), (req, res) => {
    if(!req.file) {
        return res.status(400).send({status: 'error', error: 'no file'})
    }
    console.log(req.file);

    res.send('file uploaded')
})
app.listen(8080)