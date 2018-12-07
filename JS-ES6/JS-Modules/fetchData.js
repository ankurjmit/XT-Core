class fetchData {
    constructor() {
        this.serviceUrl = 'http://localhost:3000/profile';
    }
    async static get(url) {
        const response = await fetch(url);
        return response.json();
    }

    static post() {

    }
}

module.exports = fetchData;