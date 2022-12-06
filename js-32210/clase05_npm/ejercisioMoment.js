const moment = require('moment')

const fechaActual = moment()

console.log(fechaActual)

const miFechaDeNacimiento = moment('1937-12-04', 'YYYY-MM-DD HH:12:54')

console.log(miFechaDeNacimiento)

const diferencia = fechaActual.diff(miFechaDeNacimiento,'days')

console.log('Dias que pasaron desde que naci :', diferencia) //una forma

const diferencia2 = `pasaron ${diferencia} dias desde mi nacimiento`

console.log(diferencia2) //otra forma
