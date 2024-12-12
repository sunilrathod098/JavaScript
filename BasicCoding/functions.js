//Functions

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2)

// }

// addTwoNum(5, 6)


function addTwoNum(num1, num2) {
    // let res = num1 + num2
    // console.log("This a addition function");
    return num1 + num2
    // return res
}

const res = addTwoNum(5, 6)
// console.log(res);



function loginUserMsg (username = 'Sunil Rathod') {
    if(!username){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged In`
}

loginUserMsg("sunil")
// console.log(loginUserMsg("sunil"));
// console.log(loginUserMsg());


function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 500, 600, 1000));

function calculateCartPrices(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrices(200, 500, 600, 1000));



const user = {
    name: 'Sunil Rathod',
    age: 30,
}
function handleObject (anyobject) {
    // console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
    
}
handleObject(user)
handleObject({
    name: "Tanush Rathod",
    age: 1
})


const myArr = [100, 200, 600, 400]

function arrValue(arr) {
    return arr[0]
}

// console.log(arrValue(myArr));
// console.log(arrValue([500, 122, 155, 1252]));








































