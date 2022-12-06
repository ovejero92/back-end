const fs = require('fs')

const filename = './ejmplo.txt'

fs.writeFile(filename, 'Saludo para Jhonatan Pintos\n', error => {
if(error) return console.log('Hubo un error');

  fs.appendFile(filename, 'Saludos a Agustin Balart', error => {
    if(error) return console.log('hubo un error');
    fs.readFile(filename, 'utf-8' , (error, contenido) => {
        if(error) return console.log('hubo un error');
        console.log('contenido:', contenido)
        fs.unlink(filename, error => {
            if(error) return console.log('hubo un error');
            console.log('borrado exitosamente')
        })
    })
  })
})

console.log('FIN!!!')