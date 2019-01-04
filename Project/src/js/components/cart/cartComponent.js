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
        <div class="cart" role="dialog">
            <div class="cartContainer">
                <div class="cart__navHeader">
                <nav class="header">
                    <div class="headerContainer">
                        <div class="headerContainer__logo" aria-label="logo" >
                            <a href="#" ><img id="/" class="headerContainer__logo--img" src="./static/images/logo.png" alt="Sabka Bazaar"></a>
                        </div>
                        <div class="headerContainer__navigation">
                            <ul role="menubar">
                                <li><a role="menuitem" href="#" id="/">Home</a></li>
                                <li><a role="menuitem" href="#" id="products">Products</a></li>
                            </ul>
                        </div>
                        <div class="headerRight">
                            <div class="loginContainer">
                                <span class="login" aria-label="login"><a href="#" id="signin">SignIn</a></span>
                                <span class="register" aria-label="register" ><a href="#" id="signup">Register</a></span>
                            </div>
                            <div class="cartIcon overlayContent">
                                <img class="cartImg" src="./static/images/cart.svg" alt="cart"> <sapn id="cart" class="cartCount">0</span>
                            </div>
                        </div>
                    <div>
                </nav>
                </div>
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
            </div>
            <div class="cartFooter">
                <div class="promoCode">
                    <p>Promo code can be applied on payment page</p>
                </div>
                <div class="startShopping" role="button">
                    Start Shopping
                </div>
                <div class="checkout" role="button">
                    <div>Proceed to Checkout</div>
                    <div class="checkout__amount">Rs. <span class="checkout__amount--total">0</span> <span class="checkout__arrow">></span></div>
                </div>
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