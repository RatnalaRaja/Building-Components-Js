var container=document.querySelector(".star-component");
var star = document.querySelectorAll(".star");
var filled=0;
container.addEventListener("click", function(e) {
    var clicked = e.target.dataset.index;

    for(var i=0; i<filled;i++){
        star[i].classList.remove("star-filled");
    }

    for(var i=0; i<clicked;i++){
        star[i].classList.add("star-filled");
    }


    filled=clicked;
});
container.addEventListener("mouseover", function (e) {
    let clicked = e.target.dataset.index;
  
    for (let i = 0; i < 5; i++) {
      star[i].classList.remove("star-filled");
    }
  
    for (let i = 0; i < clicked; i++) {
      star[i].classList.add("star-filled");
    }
  });
  
  container.addEventListener("mouseleave", function (e) {
    for (let i = 0; i < 5; i++) {
      star[i].classList.remove("star-filled");
    }
  
    for (let i = 0; i < filled; i++) {
      star[i].classList.add("star-filled");
    }
  });
