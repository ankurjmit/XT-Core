import ProductItemComponent from './productItem/productItemComponent';
import CartService from './../../../services/cartService';

export default class ProductsComponent {
    constructor(props) {
        this.parent = props.parent;
        this.props = props;
        this.cartService = new CartService();
        this.render();
    }
    render() {
        const markup =
            `
            <div class="productItemsContainer">
            </div>
        `;
        this.parent.append(markup);
        this.productItemContainer = $('.productItemsContainer');
        this.props.data.forEach((product) => {
            new ProductItemComponent({ parent: this.productItemContainer, product: product })
        })
        this.parent.find('.buyNow').click(event => {
            this.cartService.addToCart(event.target.getAttribute('id'))
        })
    }
}