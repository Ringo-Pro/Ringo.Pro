const details = document.querySelectorAll('details'),
  filterSearch = document.getElementById('js-searchFilter'),
  filtersForm = document.getElementById('js-filtersForm');
const checkboxes = filtersForm.querySelectorAll('input[type="checkbox"]');
let allFilters = [];
console.log(details);
filterSearch.oninput = function input() {
  const value = this.value;
  console.log(value);
};
checkboxes.forEach((item) => {
  const name = item.name,
    mainFilter = item.getAttribute('data-main-filter');
  allFilters.push({ name: name, main: mainFilter });
});
console.log(allFilters);
allFilters.forEach((item) => {
  item.name.includes('gen') ? console.log(item.main) : console.log(false);
});
// details[0].innerText

function openDetails(i) {
  details[i].setAttribute('open', true);
}
function closeDetails(i) {
  details[i].removeAttribute('open');
}
function checkDetails(i) {
  const check = details[i].getAttribute('open');
  return check ? true : false;
}
checkDetails(0);
function _testing() {
  const val = filterSearch.value.toUpperCase();
  for (let i = 0, length = allFilters.length; i < length; i++) {
    let _el = allFilters[i];
    let textval = _el.name;
    const detailsIndex = allFilters[i].main;
    if (val == '') {
      details.forEach(function (item) {
        if (item.classList.contains('d-none') && item.getAttribute('open')) {
          item.classList.remove('d-none');
          item.removeAttribute('open');
        } else if (item.classList.contains('d-none')) {
          item.classList.remove('d-none');
        } else if (item.getAttribute('open')) {
          item.removeAttribute('open');
        }
      });
    } else if (
      textval.toUpperCase().indexOf(val) > -1 &&
      !checkDetails(detailsIndex)
    ) {
      if (details[detailsIndex].classList.contains('d-none')) {
        details[detailsIndex].classList.remove('d-none');
      }
      openDetails(detailsIndex);
    } else if (textval.toUpperCase().indexOf(val) == -1) {
      console.log('yeah');
      details[detailsIndex].classList.add('d-none');
    }
  }
}
filterSearch.addEventListener('keyup', _testing);

// leeg ? alles weergeven maar dicht
// match ? weergeven en open
// geen match ? niet weergeven
