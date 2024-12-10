# JavaScript



- *eval *- The `eval()` function evaluates JavaScript code represented as a string and returns its completion value. The source is parsed as a script.

- **Syntax** - eval(String)
- EX - console.log(eval('2 + 2')) // Output :- 4




- *Undefined* - The undefined global property represents the primitive value undefined. It is one of JavaScript's primitive types.


- *Null* - Null is a Object / Language error 


- *(for ... in)* - The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
- **Syntax** - for (variable in object) statement




`setTimeout()` ;- 
- This behavior is due to JavaScript's event loop:
- Synchronous code runs first.
- Asynchronous operations (like setTimeout) are sent to the event loop, which executes them after the specified delay when the call stack is clear.


```console.log('start'); setTimeout(() => { console.log("Delayed for 1 second ");}, 2000); console.log('end');```
- Note Above Code- This code demonstrates JavaScript's asynchronous behaviour. It logs `start` and `end` immediately, while the setTimeout schedules the message "Delayed for 1 second." to appear after 2 seconds, showing how asynchronous tasks don't block synchronous code execution.





























