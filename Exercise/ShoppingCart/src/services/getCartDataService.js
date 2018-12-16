class getCartDataService {
    constructor(){
        
    }
    getData(){
        return fetch('src/mock-data/data.json').then(res=>res.json())
    }
}

module.exports = getCartDataService;