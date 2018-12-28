import ProductsService from './../../../services/productsService';

export default class CartItemComponent {
    constructor(props) {
        this.props = props;
        ProductsService.getProductsById(this.props.data.id)
            .then(product => this.render(product))
    }
    render(product) {
        const markup = `
        <div class="cartItem">
            <div class="cartItem__image">
                <img src=${product.imageURL} alt=${product.name}>
            </div>
            <div class="cartItem__details">
                <h2 class="cartItem__details--name">${product.name}</h2>
                <div class="cartItem__details--quantity">
                    <div class="cartItem__details--quantity--minus">-</div>
                    <div class="cartItem__details--quantity--number">${this.props.data.qty}</div>
                    <div class="cartItem__details--quantity--plus">+</div>
                    <div class="cartItem__details--quantity--multiply">X</div>
                    <div class="cartItem__details--quantity--total">Rs.${product.price}</div>
                </div>
            </div>
            <div class="cartItem__price">
                <p>Rs.187</p>
            </div>
        </div>
        `
        this.props.parent.append(markup);
    }
}