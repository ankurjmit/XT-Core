import CartService from './../../services/cartService';
import CartItemComponent from './cartItem/cartItemComponent';
import ProductsService from './../../services/productsService';
import HeaderComponent from './../header/headerComponent';


export default class CartComponent {
    constructor(props) {
        this.cartTotal = 0;
        this.parent = props.parent;
        this.cartService = new CartService();
        this.updateQuantity = this.updateQuantity.bind(this);
        this.render();
    }

    render() {
        const markup = `
        <div class="cart">
            <div class="cart__navHeader"></div>
            <div class="cart__header">
                <div class="cart__header--title">My Cart ( <span class="cart__header--count">0</span> item)</div>
                <div class="cart__header--close">X</div>
            </div>
            <div class="cartItemContainer">
                <div class="cartItemContainer__empty">
                    <div class="emptyCartContent">
                        <h3>No items in your cart</h3>
                        <p>Your favourite items are just a click away </p>
                    </div>
                </div>
            </div>
            <div class="lowerPriceLabel">
                <div class="lowerPriceLabelContent">
                    <div class="lowerPriceLabel--img">
                        <img src="../../static/images/lowest-price.png" alt="lowest-price">
                    </div>
                    <div class="lowerPriceLabel--text">You wont't find it cheaper anywhere</div>
                </div>
            </div>
            <div class="promoCode">
                <p>Promo code can be applied on payment page</p>
            </div>
            <div class="startShopping">
                Start Shopping
            </div>
            <div class="checkout">
                <div>Proceed to Checkout</div>
                <div class="checkout__amount">Rs. <span class="checkout__amount--total">0</span> <span class="checkout__arrow">></span></div>
            </div>
        </div>;
        `;
        $(this.parent).html(markup);
        this.cartItemContainer = $('.cartItemContainer');
        this.cartNavHeaderContainer = $('.cart__navHeader');

        $('.cart__header--close,.startShopping,.checkout,.cart__navHeader').on('click', () => {
            $('.overlay').css('display', 'none');
            $("body").css("overflow", "auto");
        })
        this.drawCartItems();
        this.addNavigationHeader();
    }
    addNavigationHeader(){
        new HeaderComponent({ parent: this.cartNavHeaderContainer});
    }
    drawCartItems() {
        this.cartTotal= 0;
        let cartItems = this.cartService.fetchCartItem();
        $('.cart__header--count').html(cartItems.length);

        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                new CartItemComponent({ parent: this.cartItemContainer, data: item, updateQuantity: this.updateQuantity });

                ProductsService.getProductsById(item.id)
                    .then(product => {
                        this.cartTotal = this.cartTotal + product.price * item.qty;
                        $('.checkout__amount--total').text(this.cartTotal);
                    })
            })

        }
        else {
            $('.cartItemContainer__empty').css('display', 'block');
            $('.lowerPriceLabel').css('display', 'none');
            $('.promoCode').css('display', 'none');
            $('.checkout').css('display', 'none');
            $('.startShopping').css('display', 'block');
            $('.cart__header--title').html('My Cart');
        }
    }

    updateQuantity(operation, productId) {
        this.cartService.updateProductQty(operation,productId);
        this.reRender();
    }
    reRender(){
        this.cartItemContainer.empty();
        this.render();
    }
}