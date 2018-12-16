const ShoppingCart = require('./component/shoppingCart');
$(function () {
    console.log('Jquery is loaded');
    const shoppingCart = new ShoppingCart();
    let app = $("#app");

    shoppingCart.render().then(res => {
        app.html(res);
    })
});