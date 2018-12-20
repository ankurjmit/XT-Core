const DataAccessLayer = require('./DAL');
const Profile = require('./profileModal');

const dataAccessLayer = new DataAccessLayer("data.json");

class ProfileService {
    constructor() {

    }

    addProfile(requestBody) {
        return new Promise((resolve, reject) => {
            let newProfile = new Profile(requestBody.name, requestBody.city);
            dataAccessLayer.addProfileInDatabase(newProfile, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    viewAllProfiles() {
        return new Promise((resolve, reject) => {
            dataAccessLayer.viewAllProfiles((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }
}

module.exports = ProfileService;