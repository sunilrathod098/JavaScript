//Signleton

//object literals
// we access the object value by using dot notation 
const mySbl = Symbol("key1")

const JsUser = {
    name: "Sunil",
    age: 22,
    "full name": "sunil rathod",
    [mySbl]: "mykeys", // we pass symbol in object by using [mySbl]
    email: "sunilrahtod@google.com",
    location: "Pune",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySbl]);
// console.log(typeof JsUser[mySbl]);
// console.log(JsUser['full name']);

JsUser.email = 'sunilrathod@gmail.com'

// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = 'sunil@microsoft.com'
// console.log(JsUser);


JsUser.greeting = function () {
    // console.log("Hello Js user");
    
}

JsUser.greeting1 = function () {
    console.log(`Hello Js user, ${this["full name"]}`);

}
// console.log(JsUser.greeting());
// console.log(JsUser.greeting1());

// --------------------------------------------------------------------------
//Object - singleton

// const tinderUser = new Object() // This is a singleton object

const tinderUser = {} // this is a non-singleton object
tinderUser.id = '123qwe'
tinderUser.name = 'tinder'
tinderUser.isLoggedIn = false

const regularUser = {
    email: 'tinder@app.com',
    fullName: {
        userFullName:{
            firstName:'sunil',
            lastName: 'rathod'
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1:'a', 2:'b' }
const obj2 = { 3:'a', 4:'b' }
const obj4 = { 5:'a', 6:'b' }
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

// --------------------------------------------------------------------------------------
//Object De-Structure

const course = {
    name: "JavaScript",
    duration: "30weeks",
    courseFees: 999
}

// console.log(course.name);

const {name, courseFees} = course

console.log(name, courseFees);

// navbar = (navbar) =>{
// }
// const newNav = navbar(channel = "chai aur Js" )

// console.log(newNav);
// --------------------------------------------------------------------------------------

// API's Hanlder

//json formate
// {
//     "name": 'sunil',
//     "courseName": 'Api with JS',
//     "courseFees": 'Free'
// }




















