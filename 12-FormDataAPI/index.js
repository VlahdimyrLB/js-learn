const form = document.querySelector(".form");
// also valid approach
// const formData = new FormData(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  // won't directly return values
  console.log(formData); // FormData {}

  // spread out - entries, values, keys
  //   const entries = [...formData.entries()];
  //   console.log(entries); // (3) [Array(2), Array(2), Array(2)]

  const values = [...formData.values()];
  console.log(values); // (3) ['john', 'john@gmail', 'johnny']

  const keys = [...formData.keys()];
  console.log(keys); // (3) ['name', 'email', 'password']

  // iterate over with "for of" loop
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`);
    // name = john
    // email = john@gmail
    // password = johnny
  }

  //ANOTHER WAY

  // check for value
  const name = formData.get("name");
  console.log(name); // john

  // append or add
  formData.append("test", "testValue");

  // delete
  formData.delete("test");
  formData.delete("email");

  // check property
  const checkName = formData.has("name");
  console.log(checkName); // true

  const entries = [...formData.entries()];
  console.log(entries); // (2) [Array(2), Array(2)]

  // WE CAN USE AXIOS
  // it's not JSON so....(depends on the server)
  // axios.post("someUrl", formData);

  //CONVERT it easily to object using this Object.fromEntries()
  const formObject = Object.fromEntries(formData);
  console.log(formObject); // {name: 'john', password: 'johnny'}
  // will work
  // axios.post("someUrl", formObject);

  // reset
  e.currentTarget.reset();
});

// TYPICAL SETUP
// TYPICAL SETUP
// const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   const values = [...formData.values()];

//   if (values.includes("")) {
//     console.log("please enter all values");
//     return;
//   }
//   const formObject = Object.fromEntries(formData);
//   // do something
//   console.log(formObject);

//   e.currentTarget.reset();
// });
