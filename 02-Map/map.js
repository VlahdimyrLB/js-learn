//returns a new array
//DOES NOT change the size of original array
//uses values from the original array

const Person = [
  {
    name: "Vlahd",
    age: 21,
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

// I can return all their names
const names = Person.map((person) => {
  return person.name;
});
console.log(names); // [ 'Vlahd', 'Jarom', 'Jolu' ]

//I can also multiply ther ages by 2
const ageXTwo = Person.map((person) => {
  return person.age * 2;
});
console.log(ageXTwo); // [ 42, 58, 62 ]

//This approach will also work
//arrow funciton then reference it
const position = (person) => person.position;
const positions = Person.map(position);
console.log(positions);

//I can also return an object
const newPerson = Person.map((item) => {
  return {
    firsName: item.name.toLocaleUpperCase(),
    oldAge: item.age + 30,
  };
});

console.log(newPerson);

//Sample use case in showing array items in HTML/JSX
const viewNames = Person.map((person) => `<h3>${person.name}</h3>`);
const result = document.querySelector("#result");
result.innerHTML = viewNames.join("");
//join(" ") function removes the , comma separator because of the " "
