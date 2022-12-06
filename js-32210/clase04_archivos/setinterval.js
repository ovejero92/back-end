const temporizador = () => {
    let counter = 1 
    console.log('iniciar');
    const timer = setInterval(() => {
        console.log(counter++);
        if(counter > 5) {
            clearInterval(timer)
        }
    }, 1500)   // 1 seg y medio //

} 
const operacion = () => console.log('booooooooooom');

console.log('Tik Tick');

temporizador(operacion)

console.log('finalizar proceso')