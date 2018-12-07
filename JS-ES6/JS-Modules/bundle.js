(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ProfileService  = require('./profileService');
const ProfileComponent  = require('./profileComponent');

const profile = new ProfileComponent(new ProfileService());

profile.findAllProfiles();
},{"./profileComponent":3,"./profileService":4}],2:[function(require,module,exports){
class Profile {
    constructor(id, name, city) {
        this.id = id
        this.name = name;
        this.city = city;
    }
}

module.exports = Profile;
},{}],3:[function(require,module,exports){
const Profile = require('./profile');

class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    findAllProfiles() {
        this.profileService.findAll()
            .then(res => console.log(res))
            .catch((err) => { console.log(`Error in finding all profile ->  ${err.err}`) });
    }

    saveProfile(id, name, city) {
        const profile = new Profile(id, name, city);
        this.profileService.save(profile)
            .then(res => console.log(res))
            .catch((err) => { console.log(`Error in saving profile ->  ${err.err}`) });
    }
    findProfileById(id) {
        this.profileService.findById(id)
            .then((res) => console.log(res))
    }
    removeProfileById(id) {
        this.profileService.removeById(id)
            .then((res) => console.log(res))
            .catch((err) => { console.log(`Error in removing profile ->  ${err.err}`) });
    }
    updateProfile(id, name, city) {
        const profile = new Profile(id, name, city);
        this.profileService.update(profile)
            .then(res => console.log(res))
            .catch((err) => { console.log(`Error in updating profile ->  ${err.err}`) });
    }
}

module.exports = ProfileComponent;
},{"./profile":2}],4:[function(require,module,exports){
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
},{}]},{},[1]);
