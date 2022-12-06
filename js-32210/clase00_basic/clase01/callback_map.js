const lista = [1, 2 ,3, 4, 5]

const myMap = (lista, callback) => {
    const newLists = []

    for (const element of lista) {
        const newValue = callback(element)
        newLists.push(newValue)
    }
    return newLists
}
const listaNueva = myMap(lista, x => x*3)
const listaNueva2 = myMap(lista, x => x*x)

console.log(listaNueva);
console.log(listaNueva2);

Array.prototype.myMap = function (callback ) {
    const newLists = []

    for (let i = 0; i < this.length; i++) {
        element = this[i]
        const r = callback(element)
        newLists.push(r)
    }
   
    return newLists
 }
 const myList = [2,4,6,8,11]

 const resultado = myList.myMap (x => x + 45)
 const resultado1 = myList.myMap (x => x*2)
 console.log(resultado);
 console.log(resultado1);