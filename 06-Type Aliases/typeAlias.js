// As you can see we have added various attributes over the User
// Create a function 
var createUser = function (user) {
    return {
        name: user.name,
        email: user.email,
        phoneNo: user.phoneNo,
        isActive: user.isActive
    };
};
// To pass a user, we have to pass the parameters by creating a new object in the User Type
var userObject = {
    name: "Aditya",
    email: "adityatrivedi612@gmail.com",
    phoneNo: 124658598,
    isActive: true
};
console.log(createUser(userObject));
