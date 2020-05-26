console.log('filter toggle!!')

const filterButtons = document.querySelectorAll('.filter')
const genreFilterFieldset = document.querySelector('.genres-filter')

console.log(filterButtons)

filterButtons[3].addEventListener('click', () => {
    genreFilterFieldset.style.display = 'block'
})