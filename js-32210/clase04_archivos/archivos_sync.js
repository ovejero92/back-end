const fs = require('fs')

const filename = './ejmplo.txt'

fs.writeFileSync(filename , 'saludos a emmanuel. Hiii') // escribir

if(fs.existsSync(filename)) {
     
             let contenido = fs.readFileSync(filename, 'utf-8')  // Leer
             console.log('contenido:', contenido);

      fs.appendFileSync(filename, '\nmas saludos para los demas') //crear sin reemplazar 

           contenido = fs.readFileSync(filename, 'utf-8')
           console.log('contenido NEW', contenido);

       fs.unlinkSync(filename, 'utf-8') // Borrar archivo

} else {
    console.log('el Archivo no existe')
}


console.log('end');