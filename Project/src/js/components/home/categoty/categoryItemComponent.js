export default class CategoryItemComponent {
    constructor(props){
        this.props = props;
        this.render();
    }
    render(){
        const markup = `
        <div class="categoryBorder"></div>
        <div class="categoryItem" style="${this.props.position ? 'flex-direction: row' : 'flex-direction: row-reverse'}">
            <div class="categoryItem__photo">
                <img src=${this.props.data.imageUrl} alt=${this.props.data.name}>
            </div>
            <div class="categoryItem__details">
                <h2 class="categoryItem__details--name">${this.props.data.name}</h2>
                <p class="categoryItem__details--description">${this.props.data.description}</p>
                <button class="categoryItem__details--btn">Explore ${this.props.data.name}</button>
            </div>
        </div>
        `
        this.props.element.append(markup);
    }
}