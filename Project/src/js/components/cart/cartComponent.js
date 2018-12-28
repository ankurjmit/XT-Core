import CartService from './../../services/cartService';
import CartItemComponent from './cartItem/cartItemComponent';

export default class CartComponent {
    constructor(props){
        this.parent= props.parent;
        this.cartService = new CartService();
        this.render()
    }

    render(){
        const markup = `
        <div class="cart">
            <div class="cart__header">
                <h1>My Cart <span class="cart__header--count">(1 item)</span></h1>
            </div>
            <div class="cartItemContainer">
                
            </div>
            <div class="lowerPriceLabel">
                <div>
                    <img src="../../static/images/lowest-price.png" alt="lowest-price">
                </div>
                <div>You wont't find it cheaper anywhere</div>
            </div>
            <div class="promoCode">
                <p>Promo code cab be applied on payment page</p>
            </div>
            <div class="checkout">
                <div>Proceed to Checkout</div>
                <div>Rs. 187</div>
            </div>
        </div>;
        `;
        $(this.parent).html(markup);
        this.cartItemContainer = $('.cartItemContainer');

        this.drawCartItems();
    }

    drawCartItems(){
        let cartItems = this.cartService.fetchCartItem();
        cartItems.forEach(item=>{
            new CartItemComponent({parent:this.cartItemContainer,data:item})
        })
    }
}