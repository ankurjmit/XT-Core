import ProductsService from './productsService';

export default class CartService {
    constructor() {
        this.productsService = new ProductsService();
    }

    addToCart(productId) {
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            console.log(cart.products);
            let indexOfProduct = cart.products.findIndex(product => product.id === productId);
            if (indexOfProduct != -1) {
                cart.products[indexOfProduct].qty++
            }
            else {
                cart.products.push({
                    id: productId,
                    qty: 1
                })
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            this.updateCartCount();
        }
        else {
            let cart = {
                products: [{
                    id: productId,
                    qty: 1
                }]
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            this.updateCartCount();
        }
    }
    removeFromCat(productId) {

    }
    updateCartCount() {
        let count;
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            count = cart.products.reduce((acc, curr) => acc + curr.qty, 0);
        }
        $('.cartCount').html(count);
    }

    fetchCartItem(){
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            return cart.products;
        }
        return [];
    }
}