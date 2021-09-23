const dataFetcher = function (url = null) {
  //this understood
  //check url value !null
  //throw an error

  //Get request to the url get something https verbs

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export { dataFetcher };

// const dataFetchers = () => {
//   //this limited to none
//   return 1;
// };

// const temp = () => <div>12</div>;

// function trevin() {
//   //named function
// }
