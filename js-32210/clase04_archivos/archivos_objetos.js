const fs = require('fs')
const obj = {
    name: 'r2',
    lastname: 'verbel',
    age: 15
}

const objstr = JSON.stringify(obj)
fs.writeFileSync('objeto.json', objstr)

const contentstr = fs.readFileSync('objeto.json', 'utf-8')
console.log(contentstr);
const objNEW = JSON.parse(contentstr)

console.log(objNEW);