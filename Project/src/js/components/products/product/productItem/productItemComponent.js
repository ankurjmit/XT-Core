import CartService from './../../../../services/cartService';

export default class ProductItemComponent {
    constructor(props) {
        this.product = props.product;
        this.parent = props.parent;
        this.render();
    }

    render() {
        const markup =
            `
        <div class="productItem">
            <div class="productItem__name">
                <h3>${this.product.name}</h3>
            </div>
            <div class="productItem__details">
                <div class="productItem__details--photo">
                    <img src=${this.product.imageURL} alt="Baby">
                </div>
                <div class="productItem__details--description">
                    <div class="productItem__details--description--text">${this.product.description.substr(0, 130)}</div>
                    <div class="productItem__details--description--mobileBuyBtn">
                    <button class="buyNow" id=${this.product.id}>Buy Now @ Rs.${this.product.price}</button>
                    </div>
                </div>
            </div>
            <div class="productItem__buy">
                <div class="productItem__buy--mrp">MRP : ${this.product.price}</div>
                <div class="productItem__buy--btn">
                    <button class="buyNow" id=${this.product.id}>Buy Now</button>
                </div>
                <div class="productItem__buy--btn--cart">
                    <button class="buyNow" id=${this.product.id}>Buy Now @ ${this.product.price}</button>
                </div>
            </div>
        </div>    
        `;
        this.parent.append(markup);
    }
}