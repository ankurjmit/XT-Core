class BillingDetailComponent {
    constructor() {

    }
    render() {
        return `
        <div class="billingSection">
                <div class="helpSection">
                    <p class="help">Need Help<br>
                        or have questions ? </p>
                    <p class="care">Call Customer Service at<br>1-800-555-55</p>
                    <a class="care" href="#">Chat with one of <br>our agent</a>
                    <a class="care" href="#">See return <br>& exchange policy</a>
                </div>
                <div class="billing">
                    <div class="promoCode">
                        <form>
                            <label for="promoCode">ENTER PROMO CODE OR GIFT CARD</label>
                            <div class="promoCodeInputBox">
                                <input type="text" id="promoCode">
                                <button type="button">APPLY</button>
                            </div>
                        </form>
                    </div>
                    <div class="subtotal">
                        <div class="left">
                            <span class="leftHeading">subtotal</span>
                        </div>
                        <div>$100</div>
                    </div>
                    <div class="shipping">
                        <div class="left">
                            <span class="leftHeading">Estimated Shipping*</span><br>
                            <span class="leftSubHeading">You spent $50, so you qualify for a free shipping</span>
                        </div>
                        <div>Free</div>
                    </div>
                    <div class="promoCodeApplied">
                        <div class="left">
                            <span class="leftHeading">PROMOTION CODE</span><br>
                            <span class="leftSubHeading">JF100 APPLIED</span>
                        </div>
                        <div>-$.7</div>
                    </div>
                    <div class="finalTotal">
                        <div class="left">
                            <span class="leftHeading">Estimated total</span><br>
                            <span class="leftSubHeading">tax will be applied during checkout</span>
                        </div>
                        <div>$120</div>
                    </div>
                    <div class="checkoutContainer">
                            <div class="checkoutButtons">
                                <div class="checkoutBtn">
                                    <button>CHECKOUT</button>
                                </div>
                                <div class="continueShopping">
                                    <a href="#">Continue Shopping</a>
                                </div>
                            </div>
                            <div class="secureMsg">
                                Secure checkout. Shopping is always safe and secure.
                            </div>
                            <div class="signInMsg">
                                Sign in to save and access your account on mobile and tab.
                            </div>
                    </div>
                </div>
            </div>`;
    }
}

module.exports = BillingDetailComponent;