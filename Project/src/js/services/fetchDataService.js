export default class FetchDataService {
    constructor(){

    }
    getCarouselData(){
        return fetch('http://localhost:3000/banners')
        .then(res => res.json());
    }
    getCategoriesData(){
        return fetch("http://localhost:3000/categories")
        .then(res => res.json());
    }

    getProductsData(){
        return fetch("http://localhost:3000/products")
        .then(res => res.json());
    }
}