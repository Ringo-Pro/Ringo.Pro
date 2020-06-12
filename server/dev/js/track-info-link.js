// const nav = document.querySelector('.main-nav')

// console.log(nav.children)

// Array.from(nav.children).forEach(childElement => {
//     console.log(childElement.childNodes[1])
// });




const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) { 

        

        if(mutation){
            const anchorList = document.querySelectorAll('.track-info-link')
            // console.log('alalala', anchorList)
            anchorList.forEach(anchor => {

                console.log('jaja', anchor)

                anchor.addEventListener('click', function(event){
                    event.preventDefault()
                    document.querySelector('.track-information').style.display = 'block'
                    // console.log(event.target.previousSibling)
                    const trackId = anchor.id
                    const url = anchor.getAttribute('href')
                    console.log(url)
                    fetch(url + '?query=' + trackId + '&async=true' + '&token=' + token)
                        .then(res => res.text())
                        .then(html => {
                            document.querySelector('.track-information').innerHTML = html
                        })

                })
                // anchor.addEventListener('click', function(event){
                    
                //     console.log(this)
                // })
            })

        }


    });

});

const results = document.querySelector('.search-results')
console.log('eeeeee', results)
        
observer.observe(results, {
    childList: true,
    attributes: true,
    characterData: true,

})