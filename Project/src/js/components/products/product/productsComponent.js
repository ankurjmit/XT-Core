import ProductItemComponent from './productItem/productItemComponent';

export default class ProductsComponent {
    constructor(props) {
        this.parent = props.parent;
        this.props = props;
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
    }
}