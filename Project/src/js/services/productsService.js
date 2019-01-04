import axios from 'axios';

export default class ProductsService {
    constructor() {

    }
    getProducts() {
        return axios.get("http://localhost:3000/products")
        .then(_=>_.data)
    }
    static getProductsById(productId) {
        return axios.get("http://localhost:3000/products")
            .then(_=>_.data)
            .then(producs => {
                return producs.find(product => product.id == productId)
            })
    }
}