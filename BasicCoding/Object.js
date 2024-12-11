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
    console.log("Hello Js user");
    
}

JsUser.greeting1 = function () {
    console.log(`Hello Js user, ${this["full name"]}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greeting1());








