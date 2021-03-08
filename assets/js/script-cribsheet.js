/************************************
 *  BASIC API CALL
 */
 fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); // do something with the data, write to local storage?
    });


/************************************
 *  API CALL & DYNAMIC HTML WITH IT
 */
var userContainer = document.getElementById('users'); // a DIV
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i=0; i<data.length; i++){
        const userName = document.createElement('h3');
        const userURL = document.createElement('a');
        userName.textContent = data[i].login;
        userURL.textContent = data[i].html_url;
        userContainer.append(userName);
        userContainer.append(userURL);
      };
    });
}
fetchButton.addEventListener('click', getApi);

const user = data[i];
const h1 = document.createElement('h1');
userContainer.append(h1);
h1.textContent = user.login;
h1.textContent = user.html_url;
