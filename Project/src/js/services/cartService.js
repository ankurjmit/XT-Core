import ProductsService from './productsService';

export default class CartService {
    constructor() {
        this.productsService = new ProductsService();
    }

    addToCart(productId) {
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
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
        let count = 0;
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            count = cart.products.reduce((acc, curr) => acc + curr.qty, 0);
        }
        $('.cartCount').html(`${count} items`);
    }

    fetchCartItem(){
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            return cart.products;
        }
        return [];
    }

    updateProductQty(operation,productId){
        productId = productId.substr(5);
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let indexOfProduct = cart.products.findIndex(product => product.id === productId);
            if (indexOfProduct != -1) {
                if(operation === 'plus'){
                    cart.products[indexOfProduct].qty++;
                }
                else {
                    if(cart.products[indexOfProduct].qty == 1){
                        cart.products.splice(indexOfProduct, 1);
                    }
                    else{
                        cart.products[indexOfProduct].qty--;
                    }
                }
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            this.updateCartCount();
        }
    }
}