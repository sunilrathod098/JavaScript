# JavaScript

- **eval**  
  The `eval()` function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

  ```javascript
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

 ```javascript
 // Syntax
 for (variable in object) statement;//


##### setTimeout()
- This behavior is due to JavaScript's event loop:
-Synchronous code runs first. Asynchronous operations (like setTimeout) are sent to the event loop, which executes them after the specified delay when the call stack is clear.

``javascript
console.log('start');
setTimeout(() => {
    console.log("Delayed for 1 second.");
}, 2000);
console.log('end');

- Explanation: This code demonstrates JavaScript's asynchronous behavior. It logs start and end immediately, while the setTimeout schedules the message "Delayed for 1 second." to appear after 2 seconds, showing how asynchronous tasks don't block synchronous code execution.


### Heap & Stack

#### Heap
- The Heap is used for dynamic memory allocation, where objects and arrays (non-primitive types) are stored. Unlike the Stack, the Heap is more complex and slower to access, as it allows for flexible memory allocation.

 ```javascript
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

 ```javascript
    let userName = 'sunil rathod';

    let userName1 = userName;
    userName1 = 'rathod rajputh';

    console.log(userName);
    console.log(userName1);


