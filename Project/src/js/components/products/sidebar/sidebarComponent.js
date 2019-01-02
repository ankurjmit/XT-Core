export default class SidebarComponent {
    constructor(props){
        this.props = props;
        this.render()
    }
    render(){
        // desktop and tab view of categories

        let markup = `<div class="categoriesContainer"><ul class="categoriesContainer__categoriesList">`;
        let liHtml=``;
        this.props.data.forEach((category)=>{
            liHtml=`${liHtml}<li class="categoriesContainer__categoriesList--category ${category.id === this.props.selectedCategoryId ? 'activeCategory' : ''}"  id=${category.id}>${category.name}</li>`
        })
        markup = `${markup}${liHtml}</ul></div>`;
        $(this.props.parent).append(markup);


        // mobile view of categories
        let markupMobile = `<div class="categoriesContainerMobile"><select class="categoriesListMobile"><option class="categoryMobile" id='All'>All</option> `;
        let optionHtml=``;
        this.props.data.forEach((category)=>{
            optionHtml=`${optionHtml}<option class="categoryMobile" id=${category.id} value="${category.id}" ${category.id === this.props.selectedCategoryId ? 'selected' : ''}>${category.name}</option>`
        })
        markupMobile = `${markupMobile}${optionHtml}</select></div>`;
        $(this.props.parent).append(markupMobile);



        // desktop and tab event binding 
        $(this.props.parent).find('.categoriesContainer__categoriesList--category').click(event =>this.props.categorySelected(event.target.getAttribute('id')));
        

        // mobile event binding 

        let selectBox = $(this.props.parent).find('.categoriesListMobile');
        selectBox.change(event =>{
            this.props.categorySelected(selectBox.children("option:selected").val());
        });
    }
}