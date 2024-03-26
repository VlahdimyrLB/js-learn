const posts = [
  {
    title: "Post One",
    body: "This is Post One",
  },
  {
    title: "Post Two",
    body: "This is Post Two",
  },
  {
    title: "Post Three",
    body: "This is Post Three",
  },
];

const getPost = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  //PROMISES returns two parameters
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      //if theres no error then
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

// createPost({ title: "Post Four", body: "This is Post Four" })
//   //after resolving then it will run the getPost
//   .then(getPost) //called after the promise is fullfilled(resolved)
//   .catch((err) => console.log(err)); //solution for uncaught error in promise

//Promise.all
//use this instead of using multiple .then()
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});

// example with fetch API
//if we dont use .then((res) => res.json()) we will only return response instead of acutal data
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

//this will take arrays of promises
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// Async/Await is a way to handle responses
// create a function that is labeled async
async function init() {
  await createPost({ title: "Post Four", body: "This is Post Four" });
  //we are waiting for the await to be done before we run the getPost()

  getPost();
}

init();
