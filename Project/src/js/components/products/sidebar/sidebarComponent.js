export default class SidebarComponent {
    constructor(props){
        this.props = props;
        this.render()
    }
    render(){
        let markup = `<div class="categoriesContainer"><ul class="categoriesList">`;
        let liHtml=``;
        this.props.data.forEach((category)=>{
            liHtml=`${liHtml}<li class="category ${category.id === this.props.selectedCategoryId ? 'activeCategory' : ''}"  id=${category.id}>${category.name}</li>`
        })
        markup = `${markup}${liHtml}</ul></div>`;
        $(this.props.parent).append(markup);
        
        let markupMobile = `<div class="categoriesContainerMobile"><select class="categoriesListMobile"><option class="categoryMobile" id='All'>All</option> `;
        let optionHtml=``;
        this.props.data.forEach((category)=>{
            optionHtml=`${optionHtml}<option class="categoryMobile" id=${category.id} value="${category.id}" ${category.id === this.props.selectedCategoryId ? 'selected' : ''}>${category.name}</option>`
        })
        markupMobile = `${markupMobile}${optionHtml}</select></div>`;
        $(this.props.parent).append(markupMobile);

        $(this.props.parent).find('.category').click(event =>this.props.categorySelected(event.target.getAttribute('id')));
        let selectBox = $(this.props.parent).find('.categoriesListMobile');
        selectBox.change(event =>{
            this.props.categorySelected(selectBox.children("option:selected").val());
        });
    }
}