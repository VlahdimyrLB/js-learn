// Reduce
// iterates, callback function
// reduce to a single value - it can be number, array, object
// 1st parameter ('acc') - accumulator / total of all calculations
// 2nd parameter ('curr') - current value/iterations

const staff = [
  {
    name: "Vlahd",
    salary: 50,
    position: "Intern",
  },
  {
    name: "Duduts",
    salary: 500,
    position: "Intern",
  },
  {
    name: "Jarom",
    salary: 300,
    position: "SAS",
  },
  {
    name: "Jolu",
    salary: 100,
    position: "OSAS",
  },
];

//always return accumulator/total
// the 0 after the arrow function is the "Initial Value"
const dailyTotal = staff.reduce((total, person) => {
  console.log(total); // 0, 50, 550, 850
  console.log(person.salary); // 50, 500, 300, 100
  total += person.salary; // 0 + 50 = 50, 50 + 500 = 550 and so on
  return total;
}, 0);

console.log(dailyTotal); // 950
