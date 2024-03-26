//Fetch API - Browser API for HTTP (AJAX) Request
//Default - GET Request, supports other methods as well
//Returns a PROMISE

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url));

//response by default is not in JSON format
// fetch(url)
//   //to access response
//   .then((response) => response.json())
//   //json returns another promise
//   .then((data) => console.log(data)) //logs array of data
//   .catch((err) => console.log(err));

//Now this is the Async/Await to improve above fetch
//we added async to it will return a promise
const getTours = async () => {
  try {
    // it will await till the url is fetch
    const resp = await fetch(url);
    //after the fetch it will return a json response
    return resp.json();
  } catch (error) {
    console.log(error);
  }
};

console.log(getTours().then());
