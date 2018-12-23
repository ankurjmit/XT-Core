export default class FooterComponent {
    constructor(parent){
        this.parent = parent;
        this.render();
    }

    render (){
        const markup = `
        <div class="footer">
            <p>Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</p>
        </div>
        `
        $(this.parent).html(markup);

    }
}