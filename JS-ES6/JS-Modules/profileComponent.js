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