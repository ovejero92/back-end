class ProductManager {
    #precioBaseDeGanancia
    constructor() {
        this.products = []
        this.#precioBaseDeGanancia = 0.15
    }
    getEvents = () => {return this.products}

    getProductById = () => {
        const count = this.products.length
        if (count > 0) {
            const lastProduct = this.products[count-1]
            const id = lastProduct.id + 1
            return id
        } else {
            return 1
        }
    }

addProduct = (title, description, price , thumbnail, code, stock) => {
    const id = this.getProductById()
    const event = {
        id,
        title,
        description,
        price: price  * (1 + this.#precioBaseDeGanancia),
        thumbnail,
        code,
        stock,
    }
    this.products.push(event) 
}
}
const getProducto = new ProductManager()
getProducto.addProduct("monster-azul", "Energisante monser azul", 320, "monster-azul.webp", "j2l3k5j24", "Stock: 40" )
getProducto.addProduct("monster-blanco", "Energisante monser blanca", 330, "monster-Blanco.png", "3asdsad2d", "Stock: 23" )
getProducto.addProduct("monster-roja", "Energisante monser roja",  300, "monster-roja.jpg", "dsf22ersa", "Stock: 26" )
getProducto.addProduct("monster-verde", "Energisante monser verde", 290, "monster-verde.webp", "dfe2f544a", "Stock: 90" )

console.log(getProducto.getEvents());