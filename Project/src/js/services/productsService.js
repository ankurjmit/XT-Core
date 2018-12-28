export default class ProductsService {
    constructor() {

    }
    getProducts() {
        return fetch("server/products/index.get.json")
            .then(_ => _.json())
    }
    static getProductsById(productId) {
        return fetch("server/products/index.get.json")
            .then(_ => _.json())
            .then(producs => {
                return producs.find(product => product.id == productId)
            })
    }
}