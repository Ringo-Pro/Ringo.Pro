if(window.MutationObserver){

var observer = new MutationObserver(function(mutations) {

    mutations.forEach(function(mutation) {
      if(mutation){

const tracks = document.querySelectorAll('.draggableTrack')
const target = document.querySelector('.target-drop')
let dragged

// console.log(tracks)
// console.log(target)


function onDragOver(event){
    event.preventDefault()
}

tracks.forEach(listItem => {

    listItem.addEventListener('dragstart', (dragEvent) => {
        dragged = event.target
        // onDragStart(dragEvent)
    })

})

target.addEventListener('dragover', (event) => {
    event.preventDefault()
})

document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    
    if (event.target.className == "target-drop") {
        console.log(event.target)
      event.target.style.background = "purple";
    }
  
  }, false);

  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "target-drop") {
      event.target.style.background = "";
    }
  
  }, false);
  
  

target.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    console.log(dragged)
    console.log(event.target.parentNode.className)
    // move dragged elem to the selected drop target
    if (event.target.parentNode.className == "target-drop") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.parentNode.appendChild( dragged );
    }
  }, false);



      }
    });
  });

const results = document.querySelectorAll('.search-results')

// console.log(results)

observer.observe(results[0], {
    childList: true,
    attributes: true,
    characterData: true,

})
}