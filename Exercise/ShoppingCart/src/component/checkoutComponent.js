class CheckoutComponent {
    constructor(){

    }

    render(){
        return `<div class="checkoutContainer">
        <div class="checkoutButtons">
            <div class="checkoutBtn">
                <button>CHECKOUT</button>
            </div>
            <div class="continueShopping">
                <a href="#">Continue Shopping</a>
            </div>
        </div>
        <div class="secureMsg">
            Secure checkout. Shopping <br>is always safe and secure.
        </div>
        <div class="signInMsg">
            Sign in to save and access <br>your account on mobile and tab.
        </div>
    </div>`;
    }
}

module.exports = CheckoutComponent;