import ProductsComponent from './product/productsComponent';
import SidebarComponent from './sidebar/sidebarComponent';
import FetchDataService from './../../services/fetchDataService';

export default class ProductsPageComponent {
    constructor(props) {
        this.selectedCategory = props.selectedCategory ? props.selectedCategory : null;
        console.log(this.selectedCategory);
        this.parent = props.parent;
        this.fetchDataService = new FetchDataService();
        this.fetchDataService.getProductsData()
            .then((resProductsData) => {
                // this.productsData = resProductsData;
                this.totalProducts = resProductsData;
                return this.fetchDataService.getCategoriesData();
            })
            .then((resCategoriesData) => {
                this.categoriesData = resCategoriesData.filter(category => { return category.enabled })
                this.reRender();
            })
            .catch((err) => {
                console.log(err);
            })
        this.categorySelected = this.categorySelected.bind(this);
    }
    reRender(){
        if(this.selectedCategory){
            this.productsData = this.totalProducts.filter((product)=>{
                return product.category === this.selectedCategory;
            })
        }
        else {
            this.productsData = this.totalProducts;
        }
        $('.products').html('');
        $('.sidebar').html('');
        this.render();
    }
    categorySelected(id){
        this.selectedCategory = (this.selectedCategory === id || id == 'All') ? null : id;
        this.reRender();
    }
    render() {
        const markup = `
            <div class="productPage">
                <section class="sidebar">
                </section>
                <section class="products">
                </section>
            </div>
        `;
        $(this.parent).html(markup);
        let productsElements = $('.products');
        let categoriesElements = $('.sidebar');
        new ProductsComponent({ parent: productsElements , data:this.productsData });
        new SidebarComponent({parent : categoriesElements,data:this.categoriesData,categorySelected : this.categorySelected,selectedCategoryId:this.selectedCategory});
    }
}