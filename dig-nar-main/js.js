const observer = new IntersectionObserver ((entries)=>{
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add("show");
    }else {
      entry.target.classList.remove("show");
    }
  })
})
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



// const buttonContainer = document.getElementById("first")
// buttonContainer.addEventListener("click",revealimg)
// const images = document.getElementsByClassName("images")

// let imageIndex = 0;
// function revealimg() {
//   imageIndex++
//   for(let i=0; i<images.length; i++){
//     if(i=== imageIndex){
//       images[i].style.display="block"
//     } else{
//       images[i].style.display="none"

//     }
//   }if(images.length ===[i>9] ){
//     const x= getElementById(p)
//     x.style.display="block"
//   }
// }

