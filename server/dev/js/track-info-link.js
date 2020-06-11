// const nav = document.querySelector('.main-nav')

// console.log(nav.children)

// Array.from(nav.children).forEach(childElement => {
//     console.log(childElement.childNodes[1])
// });




const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) { 

        

        if(mutation){
            const anchorList = document.querySelectorAll('.track-info-link')
            anchorList.forEach(anchor => {

                console.log('jaja', anchor)

                anchor.addEventListener('click', function(event){
                    event.preventDefault()
                    // console.log(event.target.previousSibling)
                    const spotifyUri = anchor.id
                    const url = anchor.getAttribute('href')
                    console.log(spotifyUri)
                    fetch(url + '?query=' + spotifyUri + '&async=true' + '&token=' + token)
                        .then(res => res.text())
                        .then(html => {
                            document.querySelector('.main-content').innerHTML = html
                        })

                })
                // anchor.addEventListener('click', function(event){
                    
                //     console.log(this)
                // })
            })

        }


    });

});

const results = document.querySelectorAll('.search-results')
        
observer.observe(results[0], {
    childList: true,
    attributes: true,
    characterData: true,

})