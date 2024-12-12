//Nested Scope

function one() {
    const username = 'Sunil'

    function two() {
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    // two()

    // one()
    // console.log(username);

    if (true) {
        const username = 'Sunil Rathod'
        if (username === "Sunil Rathod") {
            console.log(username + website);
        }
        console.log(website);

    }
}

// --------------------------------------------------------------------------------------------------

//Arrow function and this keyword

const user = {
    username: 'sunil',
    age: 22,

    welcomeMsg: function () {
        // console.log(`${this.username}, welcome to profile`);
        // console.log(this);

    }
}

user.welcomeMsg()
user.username = 'rathod'
user.welcomeMsg()
// console.log(this);


function rathod() {
    // let username = 'sunil'
    // console.log(this.username);// undefined

    // console.log(this);
}
rathod()


const rathod1 = function () {
    let username = 'sunil'
    // console.log(this.username);// undefined
    // console.log(this);
}
rathod1()


const rathod2 = () => {
    let username = 'sunil'
    //     console.log(this.username);// undefined
    //     console.log(this); // {}

    //     console.log(username); //sunil
}
rathod2()


//explicity return
//in this {} curly bracket we compulsory return the value
const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(2, 5));


//implicit return
const addTwo1 = (num1, num2) => num1 + num2
// console.log(addTwo1(2, 5));


//in this method we use () paranthies we don't need to use return
const addTwo2 = (num1, num2) => (num1 + num2)
// console.log(addTwo2(2, 5));


// const addTwo3 = (num1, num2) => ({username: 'Aayush'})
// console.log(addTwo3(2, 5));

// --------------------------------------------------------------------------------------

// Immediately Invoked Functions Expressions (IIFE) Condition

// The function is immediately executed.
// Global scope can sometimes cause pollution due to excessive usage.
// To avoid pollution caused by variables declared in the global scope,
// we use an IIFE (Immediately Invoked Function Expression).

( function sunil() {//named IIFE
    console.log('Hello, I am Sunil Rathod');
    console.log(`Database connected`);
})();

( (name) => {
    console.log('Hello, I am Sunil Rathod');
    console.log(`Database connected again ${name}`);
    })('sunil'); // IIFE)();

// -------------------------------------------------------------------------------------------------







































