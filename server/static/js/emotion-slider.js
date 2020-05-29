const slider = document.querySelector('.emotion-slider')

console.log(slider)

slider.addEventListener('mouseup', function(){
    console.log(this.value)

    let valence = +this.value

    console.log(valence)

    if(valence >= 0 && valence <= 0.1){
        console.log('crying')
    }

    if(valence >= 0.1 && valence <= 0.3){
        console.log('sad')
    }
    
    if(valence >= 0.3 && valence <= 0.5){
        console.log('neutral')
    }

    if(valence >= 0.5 && valence <= 0.7){
        console.log('happy')
    }
    
    if(valence >= 0.7 && valence <= 1){
        console.log('very happy')
    }

    // 0 - 0.1 crying
    // 0.1 - 0.3 sad
    // 0.3 - 0.5 neutral
    // 0.5 - 0.7 happy
    // 0.7 - 1 very happy
    

})