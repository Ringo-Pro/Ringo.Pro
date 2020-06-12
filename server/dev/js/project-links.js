const links = document.querySelectorAll('.project-link')

// console.log('olaaa', links)

links.forEach(link => {

link.addEventListener('click', function(event){
    event.preventDefault()
    
    const url = link.getAttribute('href')

    console.log(url)

})

})