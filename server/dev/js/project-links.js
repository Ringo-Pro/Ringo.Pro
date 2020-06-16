const links = document.querySelectorAll('.project-link')
const section = document.querySelector('.project-page')

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
        section.style.display = 'block'
        
        // resultComponents.forEach(component => {
        //     component.innerHTML = html
        // })

    })

})

})