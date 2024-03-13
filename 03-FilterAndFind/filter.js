// Filter
// - returns a new array
// - can manipulate the size of new array
// - returns based on condition

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

// filter all that is less than 20 of age
const young = Person.filter((person) => person.age < 20);
console.log(young);
// result
// [
//   { name: 'Vlahd', age: 19, position: 'Intern' },
//   { name: 'Duduts', age: 16, position: 'Intern' }
// ]

//filter no match
const seniorDevs = Person.filter((person) => {
  return person.position === "waiter";
});
console.log(seniorDevs); // [] will return an empt array if no match
