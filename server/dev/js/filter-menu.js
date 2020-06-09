// const details = document.querySelectorAll('details');
// const filterSearch = document.getElementById('js-searchFilter');
// const filtersForm = document.getElementById('js-allFilters');

// // http://localhost:4000/

// filterSearch.classList.remove('d-none');

// function setLS(key, val) {
//   localStorage.setItem(key, val);
// }
// function getLS(key) {
//   localStorage.getItem(key);
// }
// function removeLS(key) {
//   localStorage.removeItem(key);
// }

// const checkboxes = filtersForm.querySelectorAll('input[type="checkbox"]'),
//   labels = filtersForm.querySelectorAll('label');
// let allFilters = [];
// checkboxes.forEach((item) => {
//   const name = item.id,
//     mainFilter = item.dataset.mainFilter;
//   allFilters.push({ name: name, main: mainFilter, item: item });
// });

// function openDetails(i) {
//   details[i].setAttribute('open', true);
//   if (details[i].classList.contains('d-none')) {
//     details[i].classList.toggle('d-none');
//   }
// }
// function closeDetails(i) {
//   details[i].removeAttribute('open');
//   if (!details[i].classList.contains('d-none')) {
//     details[i].classList.toggle('d-none');
//   }
// }
// function checkDetails(i) {
//   const check = details[i].getAttribute('open');
//   return check ? true : false;
// }
// filterSearch.addEventListener('keyup', searchForFilter);
// function display(item) {
//   if (item.classList.contains('d-none')) {
//     item.classList.toggle('d-none');
//   }
// }
// function toggleFilter(i) {
//   allFilters[i].item.classList.toggle('d-none');
//   labels[i].classList.toggle('d-none');
// }
// function searchForFilter() {
//   const val = filterSearch.value.toUpperCase();
//   let toOpen = [];
//   for (let i = 0, length = allFilters.length; i < length; i++) {
//     let _el = allFilters[i];
//     let textval = _el.name;
//     const detailsIndex = allFilters[i].main,
//       isFilterHidden = allFilters[i].item.classList.contains('d-none');
//     if (val == '') {
//       // search input === empty
//       details.forEach(function (item) {
//         const _checkboxes = item.querySelectorAll('input[type="checkbox"]'),
//           _labels = item.querySelectorAll('label');
//         if (item.getAttribute('open')) {
//           item.removeAttribute('open');
//         }
//         _checkboxes.forEach((item) => display(item));
//         _labels.forEach((item) => display(item));
//       });
//     } else if (textval.toUpperCase().indexOf(val) > -1) {
//       // search input !== checkbox value
//       if (!toOpen.includes(detailsIndex)) {
//         toOpen.push(detailsIndex);
//       }
//       if (isFilterHidden) {
//         toggleFilter(i);
//       }
//     } else {
//       // search input === checkbox value
//       if (!isFilterHidden) {
//         toggleFilter(i);
//       }
//     }
//   }
//   for (let z = 0, length = 12; z < length; z++) {
//     if (toOpen.length !== 0) {
//       toOpen.includes(`${z}`) ? openDetails(z) : closeDetails(z);
//     } else {
//       details.forEach((item) => display(item));
//     }
//   }
// }
