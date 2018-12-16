const ShoppingCartItem = require('./shoppingCartItem');
const getCartDataService = require('../services/getCartDataService');
const BillingDetail = require('./billingDetails');

class ShoppingCart {
    constructor() {
        this.dataService = new getCartDataService();
    }

    render() {
        return this.dataService.getData().then(res => {
            this.shoppingCartItems = res;
            console.log(this.shoppingCartItems.data);
            let shoppingItemHtml=this.shoppingCartItems.data.map(item =>{
                let itemHtml = new ShoppingCartItem(item);
                return itemHtml.render();
            })
            const shoppingCartHeading = `<div class="shoppingCartHeading"><h2>YOUR SHOPPING BAG</h2><h3>3 ITEMS</h3></div>`;
            const billingDetail = new BillingDetail();
            const billingDetailHtml = billingDetail.render();
             return shoppingCartHeading + shoppingItemHtml.join('') + billingDetailHtml;
        })
    }

}

module.exports = ShoppingCart;








