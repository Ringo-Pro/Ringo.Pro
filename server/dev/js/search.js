// import { play } from "./modules/player.js";

const searchBar = document.getElementById('search');
const form = document.getElementById('quickSearchForm');
const filtersForm = document.getElementById('filtersForm');
const genreInput = document.getElementById('genre');

form.addEventListener('click', function (event) {
  event.preventDefault();
});

searchBar.addEventListener(
  'input',
  debounce((event) => {
    const userInput = event.target.value;

    const url = document
      .getElementById('quickSearchForm')
      .getAttribute('action');

    history.replaceState(
      {},
      '',
      '?searchValue=' + userInput + '&token=' + token
    );
    
    fetch(url + '?query=' + userInput + '&async=true' + '&token=' + token)
      .then((res) => res.text())
      .then((html) => {
        const resultComponents = document.querySelectorAll('.search-results');

        resultComponents.forEach((component) => {
          component.innerHTML = html;
        });
      });
  })
);
// genreInput.addEventListener(
//   'input',
//   debounce((event) => {
//     const userInput = event.target.value;
//     const url = document.getElementById('genre').getAttribute('action');
//     history.replaceState(
//       {},
//       '',
//       '?searchValue=' + userInput + '&token=' + token
//     );
//     fetch(url + '?query=' + userInput + '&async=true' + '&token=' + token)
//       .then((res) => res.text())
//       .then((html) => {
//         const resultComponents = document.querySelectorAll('.search-results');

//         resultComponents.forEach((component) => {
//           component.innerHTML = html;
//         });
//       });
//   })
// );

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
