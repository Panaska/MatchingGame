"use strict";
let numberOfFaces=5;
 let theLeftSide = document.getElementById("leftSide");
 let theRightSide = document.getElementById("rightSide");

 let theContainer = document.getElementById("container");

 function generateFaces() {

 for (let i=0; i < numberOfFaces; i++)
 {
  let this_img = document.createElement("img");

this_img.src="flower.png";
 let random_top = Math.random() * 501;
 random_top = Math.floor(random_top);

 let random_left = Math.random() * 501;
 random_left = Math.floor(random_left);

 this_img.style.top = random_top + "px";
 this_img.style.left = random_left + "px";

 theLeftSide.appendChild(this_img);

 };
  let leftSideImages = theLeftSide.cloneNode(true);


  leftSideImages.removeChild(leftSideImages.lastChild);


  theRightSide.appendChild(leftSideImages);

  theLeftSide.lastChild.onclick = function nextLevel(event) {
  event.stopPropagation();
  numberOfFaces+=5;



 while(theLeftSide.firstChild) {
 theLeftSide.removeChild(theLeftSide.firstChild)};
 while(theRightSide.firstChild) {
 theRightSide.removeChild(theRightSide.firstChild)
 };
 generateFaces();

 };


theContainer.onclick = function gameOver() {
// alert("Game over!");
let modal = document.getElementById("modal");
let spanClose = document.getElementsByClassName("close")[0];
modal.style.display = "block";

spanClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
theContainer.onclick = null;
theLeftSide.lastChild.onclick = null;

};

 };
