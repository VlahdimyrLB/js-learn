// a concise of writing function expresisons
// good for simple function we only use once
// syntax: (parameter) => some code

//Normal Function
function hello() {
  console.log("Hello");
}
hello(); //Hello

//Normal Function in a variable
const hello1 = function hello() {
  console.log("Hello Normal Function");
};
hello1(); //Hello Normal Function

//Arrow Function
const hello2 = () => console.log("Hello Arrow Func");
hello2(); // Hello Arrow Func

//Another Example
const SayHelloTo = (name) => {
  console.log(`Hello ${name}`);
};

SayHelloTo("Vlahd"); // Hello Vlahd

//Use it as parameter for other functions setTimeout, Map, Filter, Reduce

//trigger it after 3000 mseconds
// setTimeout(HelloWorld, 3000);
// function HelloWorld() {
//   console.log("Hello World");
// }

//old style
setTimeout(function HelloWorld() {
  console.log("Hello World");
}, 3000);

//arrow function
setTimeout(() => console.log("Hello Daisy"), 4000);

const Numbers = [1, 2, 3, 4, 5, 6];

//squares of each of the Numbers
const squares = Numbers.map((element) => Math.pow(element, 2));
console.log(squares); // [ 1, 4, 9, 16, 25, 36 ]

//cubic of each of the Numbers
const cubic = Numbers.map((element) => Math.pow(element, 3));
console.log(cubic); // [ 1, 8, 27, 64, 125, 216 ]

//get/filters the Even numbers
const EvenNums = Numbers.filter((element) => element % 2 === 0);
console.log(EvenNums); // [ 2, 4, 6 ]

//get/filters the Odd numbers
const OddNums = Numbers.filter((element) => element % 2 !== 0);
console.log(OddNums); // [ 1, 3, 5 ]

//get the total of Numbers[]
const total = Numbers.reduce((accumulator, element) => accumulator + element);
console.log(total); // [ 1, 3, 5 ]
