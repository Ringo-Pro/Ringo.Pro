const filterForm = document.getElementById('filter_form');
const inputs_checkbox = filterForm.querySelectorAll('input[type="checkbox"]');
console.log(inputs_checkbox);

inputs_checkbox.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (item.checked) {
      console.log(item, true);
    } else {
      console.log(item, false);
    }
  });
});
