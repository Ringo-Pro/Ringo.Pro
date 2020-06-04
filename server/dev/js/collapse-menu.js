const menuIcon = document.getElementById('js-menuIcon');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', function (e) {
  sidebar.classList.toggle('collapsed');
});
