console.log('filter toggle!!')

const filterButtons = document.querySelectorAll('.filter')
const genreFilterFieldset = document.querySelector('.genres-filter')
const vibesFilterFieldset = document.querySelector('.vibes-filter')
const instrumentalnessFilterFieldset = document.querySelector('.instrumentalness-filter')
const lengthFilterFieldset = document.querySelector('.length-filter')

console.log(filterButtons)

filterButtons[0].addEventListener('click', () => {

    vibesFilterFieldset.style.display = 'none'
    genreFilterFieldset.style.display = 'none'
    instrumentalnessFilterFieldset.style.display = 'block'
    lengthFilterFieldset.style.display = 'none'
})

filterButtons[1].addEventListener('click', () => {

    vibesFilterFieldset.style.display = 'block'
    genreFilterFieldset.style.display = 'none'
    instrumentalnessFilterFieldset.style.display = 'none'
    lengthFilterFieldset.style.display = 'none'
})

filterButtons[2].addEventListener('click', () => {

    vibesFilterFieldset.style.display = 'none'
    genreFilterFieldset.style.display = 'none'
    instrumentalnessFilterFieldset.style.display = 'none'
    lengthFilterFieldset.style.display = 'block'
})

filterButtons[3].addEventListener('click', () => {

    vibesFilterFieldset.style.display = 'none'
    genreFilterFieldset.style.display = 'block'
    instrumentalnessFilterFieldset.style.display = 'none'
    lengthFilterFieldset.style.display = 'none'
})