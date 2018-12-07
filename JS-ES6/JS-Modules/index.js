const ProfileService  = require('./profileService');
const ProfileComponent  = require('./profileComponent');

const profile = new ProfileComponent(new ProfileService());

profile.findAllProfiles();