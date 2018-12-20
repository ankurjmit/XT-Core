const fs = require('fs');

class DataAccessLayer {
    constructor(dataFilePath) {
        this.dataFilePath = dataFilePath;
    }

    addProfileInDatabase(profileObj, callback) {
        try {
            fs.readFile(this.dataFilePath, (error, data) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    let dataJson = JSON.parse(data);
                    let profileArray = dataJson.profiles || [];
                    profileArray.push(profileObj);
                    dataJson.profiles = profileArray;
                    let buff = Buffer.from(JSON.stringify(dataJson));
                    fs.writeFile(this.dataFilePath, buff, err => {
                        if (err) return callback(err, null);
                        return callback(null, profileObj.name);
                    });
                }
            })
        } catch (error) {
            callback(error, null)
        }
    }
    viewAllProfiles(callback) {
        try {
            fs.readFile(this.dataFilePath, (error, data) => {
                if (error) {
                    callback(error, null);
                }
                else {
                    let dataJson = JSON.parse(data);
                    let profileArray = dataJson.profiles || [];
                    return callback(null,profileArray);
                }
            })
        } catch (error) {
            callback(error, null)
        }
    }
}

module.exports = DataAccessLayer;