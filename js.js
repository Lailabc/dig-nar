
const buttonContainer = document.getElementById("first")
buttonContainer.addEventListener("click",revealimg)
const images = document.getElementsByClassName("images")
let imageIndex = 0;
function revealimg() {
  imageIndex++
  for(let i=0; i<images.length; i++){
    if(i=== imageIndex){
      images[i].style.display="block"
    } else{
      images[i].style.display="none"

    }
  }
}

