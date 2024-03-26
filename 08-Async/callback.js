//is a way
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

//this function will add a new post to the posts array/data
//in order to see the added/created posts on load even if setTimeout is 2000 long than getPost
//we need to use callback and set the callback to getPost
const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};
//what happens is it does the push first then
//invoke the callback which is the getPost
//so it will add the pushed post before loading the output/result

//the second argument is the getPost() which is the callback parameter
createPost({ title: "Post Four", body: "This is Post Four" }, getPost);

// Results this after 2 seconds
// Post One
// Post Two
// Post Three
// Post Four
