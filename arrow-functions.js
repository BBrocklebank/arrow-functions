/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     Code Block
// return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
// curly braces used for complex code in excess of one line 
// (this isn't an example pf that)
const addTwoNumbers = (a, b) => {
    //Code Block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a, b) => (a + b);
const addTwoNumbers2 = (a, b) => a + b;
    
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2);

// Implicit Returns
//One paramater doesn't require parenthasis eg 'message'
const saySomething = message => console.log(message);
saySomething('Hello there!!');

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
// if Function returns multiple lines of code, 
// whatever follows `=>` must be wrapped inside parenthesis
const returnMultipleLines = () => (
   `<p>
   This is a multiline String
   </p>`
)