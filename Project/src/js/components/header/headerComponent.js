export default class HeaderComponent {
    constructor(parent){
        this.parent=parent;
        this.render();
    }
    render(){
        const markup = 
        `
        <nav class="header">
            <div class="logo">
                <img src="./static/images/logo.png" alt="Sabka Bazaar">
            </div>
            <div class="navigation">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                </ul>
            </div>
            <div class="headerRight">
                <div class="loginContainer">
                    <span class="login">Login</span>
                    <span class="register">Register</span>
                </div>
                <div class="cart">
                    <img class="cartImg" src="./static/images/cart.svg" alt="cart"> <span class="cartCount">0</span>items
                </div>
            </div>
        </nav>
    `;
    $(this.parent).html(markup);
    }
}