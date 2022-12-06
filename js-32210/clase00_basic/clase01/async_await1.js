const dividir = (num1, num2) => {

    return new Promise((resolve,reject) =>{
        if(num2 == 0) reject("no se puede dividir entre 0")
        else {
          setTimeout(() =>   resolve(num1/num2), 2000)
        }
        
    })
    }
    const funcAsync = async () => {
     try{
         resultado = await dividir(3 , 4)
       console.log(resultado);
       console.log("FIn");
     } catch(error) {
        console.log("error: ", error);
     }
    }
    funcAsync()
    console.log("final del archivo")