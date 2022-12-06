const temporizador = (callback) => {setTimeout(callback, 2000)}

const operacion = () => console.log("ejecutar operacion");


console.log("Tik Tick");
temporizador(operacion)
console.log("finalizar");