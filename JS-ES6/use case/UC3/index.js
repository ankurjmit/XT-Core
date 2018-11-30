"use strict";
/**
 * Implement PROMISES
 *
 * BUSINESS RULE: 
 *  If the username and password are sapient and sapient, it should
 *   return "Welcome sapient"
 *  ELSE
 *   show the relevant error
 */

const dashboard = username => {
    console.log("Welcome " + username);
};
const loginHandler = function (userDetail) {
    return new Promise((resolve, reject) => {
        if (userDetail.name === "sapient" && userDetail.password === "sapient") {
            resolve(userDetail.name);
        }
        else reject({ err: "Username and password invalid" });
    });
};
const getUser = function (mockUser) {
    return new Promise((resolve, reject) => {
        if (mockUser) {
            resolve(mockUser);
        }
        else {
            reject({ err: 'Something went wrong' })
        }
    });
};

// Test Case 1

getUser({ name: "sapient", password: "sapient" })
    .then(user => loginHandler(user))
    .then(username => dashboard(username))
    .catch(err => console.log(err.err));

    // Test Case 2

getUser({ name: "sapient", password: "admin" })
.then(user => loginHandler(user))
.then(username => dashboard(username))
.catch(err => console.log(err.err));

// Test Case 3

getUser({ name: "admin", password: "admin" })
    .then(user => loginHandler(user))
    .then(username => dashboard(username))
    .catch(err => console.log(err.err));