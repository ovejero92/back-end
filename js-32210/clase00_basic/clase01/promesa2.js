new Promise ((resolve, reject) => {
     setTimeout(() => resolve(1), 1200)
})
    .then(result => {
        console.log("res:", result);
        return result * 2
    })
    .then(result => {
        console.log("res segunda parte: ", result);
        throw "se lanzo un error"
        return result * 3
    })
    .then(result => {
        console.log("res tecera parte: ", result);
    })
    .catch(error => {
     console.log(error);
    })

    console.log("Fin");
