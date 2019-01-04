import ProductsPageComponent from './../../products/productsPageComponent';

export default class CategoryItemComponent {
    constructor(props) {
        this.props = props;
        this.render();
    }
    render() {
        const markup = `
        <div class="categoryBorder">&nbsp;</div>
        <div aria-label="category" class="categoryItem" style="${this.props.position ? 'flex-direction: row' : 'flex-direction: row-reverse'}">
            <div aria-label="categoryPhoto" class="categoryItem__photo">
                <img src=${this.props.data.imageUrl} alt=${this.props.data.name}>
            </div>
            <div aria-label="categoryDetails" class="categoryItem__details">
                <h2 class="categoryItem__details--name">${this.props.data.name}</h2>
                <p class="categoryItem__details--description">${this.props.data.description}</p>
                <button class="categoryItem__details--btn" id=${this.props.data.id}>Explore ${this.props.data.name}</button>
            </div>
        </div>
        `
        this.props.element.append(markup);
        this.props.element.find('.categoryItem__details--btn').click(event => {
            event.stopPropagation();
            this.renderProductPage(event.target.getAttribute('id'));
        })
    }
    renderProductPage(categoryId) {
        $('#app').empty();
        new ProductsPageComponent({ parent: '#app', selectedCategory: categoryId })
    }
}