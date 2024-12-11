# JavaScript

##### eval
-The `eval()` function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

// Syntax
eval(String)

// Example
console.log(eval('2 + 2')); // Output: 4

##### Undefined
- The undefined global property represents the primitive value undefined. It is one of JavaScript's primitive types.

##### Null
- Null is an object / language error.

##### (for ... in)
- The `for...in` statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

javascript
// Syntax
for (variable in object) statement;//


##### setTimeout()
- This behavior is due to JavaScript's event loop:
-Synchronous code runs first. Asynchronous operations (like setTimeout) are sent to the event loop, which executes them after the specified delay when the call stack is clear.

javascript
  console.log('start');
  setTimeout(() => {
      console.log("Delayed for 1 second.");
  }, 2000);
  console.log('end');

- Explanation: This code demonstrates JavaScript's asynchronous behavior. It logs start and end immediately, while the setTimeout schedules the message "Delayed for 1 second." to appear after 2 seconds, showing how asynchronous tasks don't block synchronous code execution.


### Heap & Stack

#### Heap
- The Heap is used for dynamic memory allocation, where objects and arrays (non-primitive types) are stored. Unlike the Stack, the Heap is more complex and slower to access, as it allows for flexible memory allocation.

javascript
  let userOne = {
      email: 'sunilrthod@gmail.com',
      upi: 'user@ybl'
  };
  let userTwo = userOne;
  let userThree = userTwo;

  userTwo.email = 'rathodrajputhrr@gmail.com';
  userThree.email = 'thaniskjddbv@gmail.com';
  console.log(userOne);
  console.log(userTwo);
  console.log(userThree);

#### Stack

- The Stack is used for static memory allocation, primarily for storing primitive types and function calls. It's a simple, last-in, first-out (LIFO) structure, making it very fast to access.

javascript
  let userName = 'sunil rathod';

  let userName1 = userName;
  userName1 = 'rathod rajputh';

  console.log(userName);
  console.log(userName1);



**Backticks**: Multiline strings without needing escape characters, and String interpolation using ${} to embed variables or expressions directly into the string.

### String
- A string is a sequence of characters enclosed in single ('), double ("), or backtick (`) quotes. Strings are immutable and represent textual data in JavaScript

#### String Methods
- `CharAt()`
- `length`
- `toUpperCase() / toLowerCase()`
- `indexOf() / lastIndexOf()`
- `includes()`
- `Slice() / Splice()`
- `replace()`
- `trim() / trimStart() / trimEnd()`
- `cancat`
- `repeat`
- Strings are immutable (cannot be modified directly).
- They support template literals for embedding variables or expressions.
- Strings can handle both ASCII and Unicode characters.


#### Time & Date

- JavaScript provides the Date object for working with dates and times. It can be used to create, manipulate, and format dates and times.

- `getFullYear()` - Gets the year.
- `getMonth()` - Gets the month (0-11).
- `getDate()` - Gets the day of the month.
- `getDay()` - Gets the day of the week (0 for Sunday).
- `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()` - Time components.

- `setFullYear`(year)
- `setMonth`(month)
- `setDate`(day)
- `setHours`(hours),
- `setMinutes`(minutes), etc.

- `toDateString()` - Converts to a readable date string.
- `toTimeString()` - Converts to a readable time string.
- `toLocaleDateString()` - Formats date based on locale.
- `toLocaleTimeString()` - Formats time based on locale.


- `getTime()` - Gets the number of milliseconds since January 1, 1970.
- `Date.now()` - Current timestamp in milliseconds.
- `getTime()` - Gets the number of milliseconds since January 1, 1970.
- `Date.now()` - Current timestamp in milliseconds.



### Arrays





































































