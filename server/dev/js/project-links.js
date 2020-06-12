const links = document.querySelectorAll('.project-link')

// console.log('olaaa', links)

links.forEach(link => {

link.addEventListener('click', function(event){
    event.preventDefault()
    
    const url = link.getAttribute('href')

    console.log(link.id)

    fetch(url + '?query=' + link.id + '&async=true' + '&token=' + token)
    .then(res => res.text())
    .then(html => {
        const resultComponents = document.querySelectorAll('.search-results')

        resultComponents.forEach(component => {
            component.innerHTML = html
        })

    })

})

})