const getUser = (mockUser,resolve, reject) => {
    
    if (mockUser) {
        resolve(mockUser);
    } else {
        reject({
            err: 'Something went wrong'
        });
    }
};

const login = (user, resolve, reject) => {
    if (user.name === "sapient" && user.password === "sapient") {
        resolve(user);
    } else {
        reject({
            err: 'Login Failed!'
        })
    }
}

const dashBoard = (user, resolve, reject) => {
    if (user) {
        resolve(user);
    } else {
        reject({
            err: 'Error in displaying dashboard!'
        })
    }
}
const handler = user => {
    console.log(user);
}
const successHandler = user => {
    login(user, successLoginHandler, failureLoginHandler);
}
const failureHandler = err => {
    console.log(err);
}
const successLoginHandler = (user)=> {
    dashBoard(user, dashboardSuccess, dashBoardFailure);
}
const dashboardSuccess = user => {
    console.log('Welcome User', user.name);
}
const dashBoardFailure = err => {
    console.log(err);
}
const failureLoginHandler = err => {
    console.log(err);
}

let mockUser = {
    name: 'sapient',
    password: 'sapient'
};
getUser(mockUser,successHandler, failureHandler);