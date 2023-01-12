const ProductManager = require('./src/desafioEntregable2')

const manager = new ProductManager('products.json');

(async () => { 
   await manager.addProduct({
    name:'wine', 
    price: 150,
    stock:20
})

console.log(await manager.getProducts());


await manager.updateProduct(2, {
    name: 'beer',
    price: 123
})
await manager.updateProductIdx(3, {
    name: 'Wine',
    price: 170
})


console.log(await manager.getProducts());
}) ()
