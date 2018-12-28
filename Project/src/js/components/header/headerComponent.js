import CartService from './../../services/cartService';
import CartComponent from './../cart/cartComponent';

export default class HeaderComponent {
    constructor(props) {
        this.parent = props.parent;
        this.props = props;
        this.cartService = new CartService();
        this.render();
    }
    render() {
        const markup =
            `
        <nav class="header">
            <div class="logo">
                <img src="./static/images/logo.png" alt="Sabka Bazaar">
            </div>
            <div class="navigation">
                <ul>
                <li><a href="#" id="/">Home</a></li>
                <li><a href="#" id="products">Products</a></li>
                </ul>
            </div>
            <div class="headerRight">
                <div class="loginContainer">
                <span class="login"><a href="#" id="signin">Login</a></span>
                <span class="register"><a href="#" id="signup">Register</a></span>
                </div>
                <div class="cart overlayContent">
                    <img class="cartImg" src="./static/images/cart.svg" alt="cart"> <sapn id="cart" class="cartCount">0</span>&nbsp;items
                </div>
            </div>
        </nav>
    `;
        $(this.parent).html(markup);
        $(this.parent).find('a').click(event => {
            event.preventDefault();
            this.props.setRouteContent(event.target.getAttribute('id'))
        });

        $(this.parent).find('.overlayContent').click(event => {
            event.preventDefault();
            new CartComponent({ parent: '#cartOverlay' });
            $("#cartOverlay").css("display", "block");
        });
        this.cartService.updateCartCount();
    }
}