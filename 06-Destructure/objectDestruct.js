// Destructure Objects
// faster/easier way to access/unpack variables from objects

const Me = {
  first: "Vlahd",
  last: "Bambalan",
  city: "Solano",
  friends: {
    boy: "julu",
    girl: "duduts",
  },
};

const last = "sample";
// variable {} curlys for object then the name we want to destructure
const {
  first,
  last: test, // allias
  city,
  friends: { boy: bestboi }, // allias bestboi but we can just leave and pass "boy"
} = Me;
console.log(first, test, city, bestboi); // Vlahd Bambalan Solano julu
// if a property doesnt exist it will show undefined
