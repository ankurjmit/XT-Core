class ProfileService {
    async save(profile) {
        const p = await fetch(this.serviceUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(profile)
        })
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();
        }
    }

    async findAll() {
        const response = await fetch(this.serviceUrl);
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();

        }
    }
    async findById(id) {
        const response = await fetch(`${this.serviceUrl}?id=${id}`);
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();

        }
    }

    async removeById(id) {
        const response = await fetch(`${this.serviceUrl}/${id}`, {
            method: 'DELETE'
        });
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();
        }
    }
    async update(profile) {
        const response = await fetch(`${this.serviceUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();
        }

    }
}

module.exports = ProfileService;