const dividir = (num1, num2) => {

return new Promise((resolve,reject) =>{
    if(num2 == 0) reject("no se puede dividir entre 0")
    else resolve(num1/num2)
})
}

const promesa = dividir(40, 5)
promesa.then(resultado => console.log(resultado))
    .catch(error => console.error(error))

    dividir(40,0)
             .then(resultado => console.log(resultado))
             .catch(error => console.error(error))