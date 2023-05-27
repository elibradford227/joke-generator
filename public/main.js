// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

// const init = () => {
//   document.querySelector('#app').innerHTML = `
//     <h1>HELLO! You are up and running!</h1>
//     <small>Open your dev tools</small><br />
//     <button class="btn btn-danger" id="click-me">Click ME!</button><br />
//     <hr />
//     <h2>These are font awesome icons:</h2>
//     <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
//   `;
//   console.warn('YOU ARE UP AND RUNNING!');

//   document
//     .querySelector('#click-me')
//     .addEventListener('click', () => console.warn('You clicked that button!'));

//   // USE WITH FIREBASE AUTH
//   // ViewDirectorBasedOnUserAuthStatus();
// };\

// const joke = [];

// const pulledJoke = () => {
//   getRequest().then((item) => {
//     joke.push(item);
//   });
// };

// const thirdCard = () => {
//   document.querySelector('#app').innerHTML = `
//   <h1>Joke Generator</h1>
//   <h4>JOKE SETUP</h4>
//   <h4>PUNCHLINE</h4>
//   <button id="getbut">GET ANOTHER JOKE</button>
//   `;
//   const getJoke = document.querySelector('#getbut');
//   getJoke.addEventListener('click', () => {
//     // eslint-disable-next-line no-use-before-define
//     secondCard();
//   });
// };

// const secondCard = () => {
//   document.querySelector('#app').innerHTML = `
//   <h1>Joke Generator</h1>
//   <h4>${getRequest.then}</h4>
//   <button id="getbut">GET PUNCHLINE</button>
//   `;
//   const getJoke = document.querySelector('#getbut');
//   getJoke.addEventListener('click', () => {
//     thirdCard();
//   });
// };

// const firstCard = () => {
//   document.querySelector('#app').innerHTML = `
//   <h1>Joke Generator</h1>
//   <h1>${joke[0]}</h1>
//   <button id="getbut">GET A JOKE</button>
//   `;
//   const getJoke = document.querySelector('#getbut');
//   getJoke.addEventListener('click', () => {
//     secondCard();
//   });
// };

// const init = () => {
//   pulledJoke();
//   firstCard();
// };

// init();
// setTimeout(() => {
//   console.warn(joke[0]);
// }, '1000');

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardThree = () => {
  getRequest().then((joke) => {
    let domString = '';
    domString += `
     <p>${joke.delivery}</p>
     <button id="getbut">GET A NEW JOKE</button>
    `;
    renderToDom('#app', domString);
    const getJoke = document.querySelector('#getbut');
    getJoke.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      cardOne();
    });
  });
};

const cardTwo = () => {
  getRequest().then((joke) => {
    let domString = '';
    domString += `
     <p>${joke.setup}<p>
     <button id="getbut">GET PUNCHLINE</button>
    `;
    renderToDom('#app', domString);
    const getJoke = document.querySelector('#getbut');
    getJoke.addEventListener('click', () => {
      cardThree();
    });
  });
};

const cardOne = () => {
  let domString = '';
  domString += `
   <p>Joke Generator</p>
   <button id="getbut">GET A JOKE</button>
   `;
  renderToDom('#app', domString);
  const getJoke = document.querySelector('#getbut');
  getJoke.addEventListener('click', () => {
    getRequest().then(cardTwo());
  });
};

// getRequest().then((value) => console.warn(value));

cardOne();
