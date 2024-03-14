// Spread Operator...
// Allows iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const aldersgate = "aldersgate";
const letters = [...aldersgate];
console.log(letters); // [ 'a', 'l', 'd', 'e', 'r', 's', 'g', 'a', 't', 'e' ]

const boy = ["Vlahd", "Jolu", "Kiko"];
const girls = ["Bernadine", "Wrixie"];

const bestfriend = "Johnny";

// spreading friends
const friends = [...boy, ...girls, bestfriend];
console.log(friends); // [ 'Vlahd', 'Jolu', 'Kiko', 'Bernadine', 'Wrixie', 'Johnny' ]

// reference
// use spread operator also to change a value from spreaded array
// to avoid affecting the original array
const newFriend = [...friends];
newFriend[0] = "Nino";
console.log(friends); // [ 'Vlahd', 'Jolu', 'Kiko', 'Bernadine', 'Wrixie', 'Johnny' ]
console.log(newFriend); // [ 'Nino', 'Jolu', 'Kiko', 'Bernadine', 'Wrixie', 'Johnny' ]

// same with objects ES8

const person = { name: "Vlahd", age: 21 };
const attributes = { ...person };
const newAttribute = { ...person, address: "Solano" };

console.log(attributes); // { name: 'Vlahd', age: 21 }
console.log(newAttribute); // { name: 'Vlahd', age: 21, address: 'Solano' }
