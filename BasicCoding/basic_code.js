let score = undefined

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// console.log(typeof(score));

// --------------------------------------------------------------------


let loggedIn = 0
// console.log(Boolean(loggedIn));
// "" & 1 => true
// "sunil" & 0 => false

let sumNumber = 22

// console.log(typeof(String(sumNumber)));


// ----------------------------------------------------------------
let value = 5

let negValue = -value

// console.log(negValue);
// console.log(typeof(negValue));




// ---------------------------------------------------------------------------
//EventLoop:

// console.log('start'); // 1

// setTimeout(() => {
//     console.log("Delayed for 1 second.");
// }, 2000); //3

// console.log('end'); // 2

// console.log(((3 + 4 )* 5));

// console.log(typeof((3 + 4) * 5) % 5); // NaN

// console.log(true);
// console.log(+"")

let CounterNum = 100
// ++CounterNum;
// --CounterNum;
// CounterNum++;
CounterNum--;
// console.log(CounterNum);


// console.log("5" === 5);

// ---------------------------------------------------------------------------
//Primitive and Non-Primitive

//Primitives-DataTypes
// String, Number, Boolean, null, undefined, Symbol, BigInt

const scored = 411
const scoreValue = 100.5

const isLogged = false
const outStepTime = null

let userEmail;//undefined

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);


const bigNUmber = 96321589656266256n


//Reference - (Non-PrimitiveType)
// Arrays, Objects, Function

const arr = [1, 2, 3]

let obj = {
    name: 'sunil',
    age: 21
}

function MyFunc() {
    // console.log('Hii this is my function')
}
MyFunc()

// console.log(typeof anotherId);
// -----------------------------------------------------------------------------------------

//Stack(P) and Heap(NP)

//Stack(Primitive Type)
let userName = 'sunil rathod'

let userName1 = userName
userName1 = 'rathod rajputh '

// console.log(userName);
// console.log(userName1);


//Heap(Non-Primitive Type)
let userOne = {
    email: 'sunilrthod@gmail.com',
    upi: 'user@ybl'
}
let userTwo = userOne
let userThree = userTwo

userTwo.email = 'rathodrajputhrr@gmail.com'
userThree.email = 'thaniskjddbv@gmail.com'
// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);

// ----------------------------------------------------------------------------------
// String ('' / "")

const userStr = 'sunil-rathod'

// console.log(userStr);
// console.log(userStr.length);
// console.log(userStr.toUpperCase());
// console.log(userStr.charAt(2));
// console.log(userStr.indexOf('i'));
// console.log(userStr.slice(0, 8));

const newStr = "  Tanush rathod "
// console.log(newStr);
// console.log(newStr.trim());

const url = "https://github.sunil%20rathod089"
const newUserName = "sunil-rathod-thanush"

// console.log(url.replace('%20', '-'));
// console.log(url.includes(".com"));
// console.log(newUserName.split('-'));


// ----------------------------------------------------------------------------------------
// Numbers and maths
// Numbers
const amount = 500
// console.log(amount);

const discount = 10
const tax = 5
const total = amount - discount + tax
// console.log(total);

const newAmount = new Number(500)
// console.log(newAmount);
// console.log(newAmount.toString().length);
// console.log(newAmount.toFixed(2));

const otherNumber = 255.35482

// console.log(otherNumber.toPrecision(5));
const otherNumber1 = 10000000000
// console.log(otherNumber1.toLocaleString('en-IN'));

// Maths
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.6));
// console.log(Math.floor(5.2));
// console.log(Math.ceil(5.2));
// console.log(Math.round(Math.PI));
// console.log(Math.floor(Math.random() * 10 )+ 1);

const min = 10
const max = 20
// Math.random() * (max -min + 1)

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ------------------------------------------------------------------------------------------------------------
//Date and Time
// Dates

let MyDate = new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toLocaleTimeString());
// console.log(typeof MyDate);

let MyCreatedDate = new Date(2024, 2, 12)
// console.log(MyCreatedDate.toDateString());
// console.log(MyCreatedDate.toLocaleDateString());
// console.log(MyCreatedDate.toLocaleTimeString());

let MyNewDate = new Date('01-31-2024')
// console.log(MyNewDate.toLocaleString());
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(MyNewDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let NewDate = new Date()
// console.log(NewDate);
// console.log(NewDate.getDate());
// console.log(NewDate.getMonth() + 1);
// console.log(NewDate.getFullYear());
// console.log(NewDate.getTime());

// console.log(NewDate.toLocaleString("default", {
//     // timeStyle: 'full',
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     hour12: false,
//     // timeZone: ''
// }))

// ---------------------------------------------------------------------







