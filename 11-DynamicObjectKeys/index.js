const person = {
  name: "john",
};

console.log(person.name); //john
console.log(person); //{ name: 'john', age: 25 }

//square bracket notation
const items = {
  "featured-item": ["item1", "item2"],
};

//dot notation wont work in this example
console.log(items["featured-item"]); // ['item1', 'item2']

// access dynamic keys with []
const appState = "loading";

const app = {
  [appState]: true,
};
console.log(app); // {loading: true}

const keyName = "computer";
// add new item in the object
app[keyName] = "apple";
console.log(app); // { loading: true, computer: 'apple' }

//real example
const state = {
  loading: true,
  name: "",
  job: "",
};

const updateState = (key, value) => {
  //state[key] means which property I want to set to the value
  state[key] = value;
};

// we can update object dynamically
updateState("name", "john");
console.log(state); // { loading: true, name: 'john', job: '' }

//we can add dynamically
updateState("products", []);
console.log(state); // { loading: true, name: 'john', job: '', products: [] }
