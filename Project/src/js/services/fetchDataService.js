export default class FetchDataService {
    constructor(){

    }
    getCarouselData(){
        return fetch("server/banners/index.get.json")
        .then(res => res.json());
    }
    getCategoriesData(){
        return fetch("server/categories/index.get.json")
        .then(res => res.json());
    }

    getProductsData(){
        return fetch("server/products/index.get.json")
        .then(res => res.json());
    }
}