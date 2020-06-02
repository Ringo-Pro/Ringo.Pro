const slider = document.querySelector('.emotion-slider')
const smiley = document.querySelector('.smiley-container')

console.log(slider)

slider.addEventListener('mouseup', function(){
    console.log(this.value)

    let valence = +this.value

    console.log(valence)

    if(valence >= 0 && valence <= 0.1){
        slider.parentElement.parentElement.parentElement.parentElement.style.background = '#0077ff'
        console.log('😢')
        smiley.textContent = 'Sadness 😢'
        
    }

    if(valence >= 0.1 && valence <= 0.3){
        slider.parentElement.parentElement.parentElement.parentElement.style.background = '#00c8ff'
        console.log('🙁')
        smiley.textContent = 'Sadness 🙁'
    }
    
    if(valence >= 0.3 && valence <= 0.5){
        slider.parentElement.parentElement.parentElement.parentElement.style.background = '#48ff00'
        console.log('😐')
        smiley.textContent = 'Neutral 😐'
    }

    if(valence >= 0.5 && valence <= 0.7){
        slider.parentElement.parentElement.parentElement.parentElement.style.background = '#48ff00'
        console.log('😄')
        smiley.textContent = 'Happiness 😄'
    }
    
    if(valence >= 0.7 && valence <= 1){
        slider.parentElement.parentElement.parentElement.parentElement.style.background = '#fff200'
        console.log('😁')
        smiley.textContent = 'Hapiness 😁'
    }

    // 0 - 0.1 crying
    // 0.1 - 0.3 sad
    // 0.3 - 0.5 neutral
    // 0.5 - 0.7 happy
    // 0.7 - 1 very happy
    

})