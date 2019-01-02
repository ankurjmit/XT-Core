export default class ProductsService {
    constructor() {

    }
    getProducts() {
        return fetch("http://localhost:3000/products")
            .then(_ => _.json())
    }
    static getProductsById(productId) {
        return fetch("http://localhost:3000/products")
            .then(_ => _.json())
            .then(producs => {
                return producs.find(product => product.id == productId)
            })
    }
}