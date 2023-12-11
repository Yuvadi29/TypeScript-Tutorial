// Creating a custom type name User
type User = {
    name: string;
    email: string;
    phoneNo: number;
    isActive: boolean;
}

// As you can see we have added various attributes over the User

// Create a function 
const createUser = (user: User): User => {
    return {
        name: user.name,
        email: user.email,
        phoneNo: user.phoneNo,
        isActive: user.isActive
    }
}

// To pass a user, we have to pass the parameters by creating a new object in the User Type
const userObject: User ={
    name: "Aditya",
    email: "adityatrivedi612@gmail.com",
    phoneNo: 124658598,
    isActive: true
}

console.log(createUser(userObject));