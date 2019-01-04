import axios from 'axios';

export default class FetchDataService {
    constructor(){

    }
    getCarouselData(){
        return axios.get('http://localhost:3000/banners')
        .then(_=>_.data)
    }
    getCategoriesData(){
        return axios.get("http://localhost:3000/categories")
            .then(_=>_.data)
        
    }

    getProductsData(){
        return axios.get("http://localhost:3000/products")
        .then(_=>_.data)
    }
}