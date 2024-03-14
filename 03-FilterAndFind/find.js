//Find returns a single instance(object)
// - returns first match
// - if no match returns undefined

const Person = [
  {
    name: "Vlahd",
    age: 19,
    position: "Intern",
  },
  {
    name: "Duduts",
    age: 16,
    position: "Intern",
  },
  {
    name: "Jarom",
    age: 29,
    position: "SAS",
  },
  {
    name: "Jolu",
    age: 31,
    position: "OSAS",
  },
];

const fruits = ["apple", "strawberry", "mango"];

//find
const findJolu = Person.find((name) => name.name === "Jolu");
console.log(findJolu); // { name: 'Jolu', age: 31, position: 'OSAS' }

// another example
const findStrawberry = fruits.find((fruitName) => fruitName === "strawberry");
console.log(findStrawberry); //strawberry

//multiple match
const old = Person.find((person) => person.age < 31);
console.log(old); //undefined

//multiple matches
const young = Person.find((person) => person.age > 35);
console.log(young); //{ name: 'Vlahd', age: 19, position: 'Intern' }
//returns only the first match

// FILTER ALWAYS RETURN AN ARRAY
// FIND CAN RETURN SPECIFIC VALUE
