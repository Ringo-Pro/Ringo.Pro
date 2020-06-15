const links = document.querySelectorAll('.project-link')

// console.log('olaaa', links)

links.forEach(link => {

link.addEventListener('click', function(event){
    event.preventDefault()
    
    const url = link.getAttribute('href')

    console.log(url)

    fetch(url + '?query=' + link.id + '&async=true' + '&token=' + token)
    .then(res => res.text())
    .then(html => {
        // console.log(html)
        document.querySelector('.project-list').innerHTML = html

        // resultComponents.forEach(component => {
        //     component.innerHTML = html
        // })

    })

})

})