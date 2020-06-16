// import { play } from "./modules/player.js";

const searchBar = document.getElementById('search');
const form = document.getElementById('quickSearchForm');
const filtersForm = document.getElementById('filtersForm');
const genreInput = document.getElementById('genre'),
  instrumentInput = document.getElementById('instrument'),
  vocalsInput = document.getElementById('vocal'),
  keyInput = document.getElementById('key'),
  langInput = document.getElementById('lang'),
  moodInput = document.getElementById('mood'),
  themesInput = document.getElementById('themes'),
  countryInput = document.getElementById('country'),
  yearInput = document.getElementById('year');
const activeFiltersChips = document.getElementById('activeFilterChips');
const filters = [
  { input: searchBar, form: 'quickSearchForm' },
  { input: genreInput, form: 'filtersForm' },
  { input: instrumentInput, form: 'filtersForm' },
  { input: vocalsInput, form: 'filtersForm' },
  { input: keyInput, form: 'filtersForm' },
  { input: langInput, form: 'filtersForm' },
  { input: moodInput, form: 'filtersForm' },
  { input: themesInput, form: 'filtersForm' },
  { input: countryInput, form: 'filtersForm' },
  { input: yearInput, form: 'filtersForm' },
];

form.addEventListener('click', function (event) {
  event.preventDefault();
});

function fetchOnInput(input, formID) {
  input.addEventListener(
    'input',
    debounce((event) => {
      const userInput = event.target.value;
      const url = document.getElementById(formID).getAttribute('action');
      history.replaceState({}, '', `?searchValue=${userInput}&token=${token}`);

      let areThereChips = document.querySelectorAll('.chips');
      if (areThereChips.length >= 1) {
        areThereChips.forEach((item) => item.remove());
      }
      const newEl = document.createElement('span');
      newEl.innerText = userInput;
      newEl.setAttribute('class', 'chips');
      activeFiltersChips.append(newEl);

      console.log(userInput);
      fetch(`${url}?query=${userInput}&async=true&token=${token}`)
        .then((res) => res.text())
        .then((html) => {
          const resultComponents = document.querySelectorAll('.search-results');
          resultComponents.forEach((component) => {
            component.innerHTML = html;
          });
        });
    })
  );
}
filters.forEach((item) => {
  fetchOnInput(item.input, item.form);
});

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
