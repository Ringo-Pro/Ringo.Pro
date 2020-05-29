const slider = document.querySelector('.emotion-slider')

console.log(slider)

slider.addEventListener('mouseup', function(){
    console.log(this.value)
})