//Arrays

const arr = [1, 2, 3, 4, 5]
// console.log(arr)


const Myheros = ['ironman', 'spiderman', 'thor']

const newArr = new Array(1, 2, 3, 4, 5)
// console.log(newArr.length);
// console.log(newArr[0]);

// -------------------------------------------------------------------------------------------

//Array - Method

newArr.push(6) //add arr
newArr.push(7)
newArr.pop() // remove arr
newArr.unshift(0) // add a arr in 0th index
newArr.shift() // remove arr form 0th index

// console.log(newArr.indexOf(13)); // if not arr in arr give negative arr
// console.log(newArr.includes(1)); // boolean

const newArr1 = newArr.join() // comma separated
// console.log(newArr1);

// -----------------------------------------------------------------------------------------------

// Slice & Splice

// console.log("A", newArr);

const MyArr = newArr.slice(0, 4)

// console.log(MyArr);
// console.log("B", newArr);

const MyArr1 = newArr.splice(0, 4)

// console.log("C", newArr);
// console.log(MyArr1);

// --------------------------------------------------------------------------------------------

const marvel_heros = ['Ironmam', 'Spiderman', 'Thor']
const dc_heros = ['Superman', 'Batman', 'Flash']


// console.log(marvel_heros[2]);
// console.log(dc_heros);
// marvel_heros.push(dc_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// dc_heros.concat(marvel_heros)

// console.log(dc_heros);
// console.log(allHeros);

// -----------------------------------------------------------------------------------------
//Spread opt'
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const new_another_arr = another_arr.flat(Infinity)

console.log(new_another_arr);


console.log(Array.isArray("sunil"));
console.log(Array.from("sunil"));
console.log(Array.from({name:"sunil"}));// intresting

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));

// ----------------------------------------------------------------------------------











































