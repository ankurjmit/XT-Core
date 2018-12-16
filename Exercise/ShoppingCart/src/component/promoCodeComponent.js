class PromoCodeComponent {
    constructor(){

    }

    render() {
        return `<div class="promoCode">
        <form>
            <label for="promoCode">ENTER PROMO CODE OR GIFT CARD</label>
            <div class="promoCodeInputBox">
                <input type="text" id="promoCode">
                <button type="button">APPLY</button>
            </div>
        </form>
    </div>`;
    }
}

module.exports = PromoCodeComponent;