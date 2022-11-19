const impuestos = {
    impuestoIVA:16,
    impuestoCarro:40,
    impuestoMercado:5,
}
let pairKeyValue = Object.entries(impuestos)
console.log(pairKeyValue);

let Keys = Object.keys(impuestos)
console.log(Keys);

let values = Object.values(impuestos)
console.log(values);

const impuestosTotales = values.reduce((acumulado, element) => {
    console.log(acumulado,element);
    return acumulado + element
})

console.log("Final: ", impuestosTotales);