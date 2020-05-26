console.log('filter toggle!!')

const filterButtons = document.querySelectorAll('.filter')
const genreFilterFieldset = document.querySelector('.genres-filter')
const vibesFilterFieldset = document.querySelector('.vibes-filter')

console.log(filterButtons)

filterButtons[1].addEventListener('click', () => {

    vibesFilterFieldset.style.display = 'block'
    genreFilterFieldset.style.display = 'none'
})
filterButtons[3].addEventListener('click', () => {

    vibesFilterFieldset.style.display = 'none'
    genreFilterFieldset.style.display = 'block'
})