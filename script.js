'use strict';

//Defining the classes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//funtion for showing the text by overwriting the css display: none property
const openModal = function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    //iterating through the buttons to listen to when the buttons ar clicked
for (let i=0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener("click", openModal);

}
//adding the display:none property once the button overlay is clicked
const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden")

}

btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

//funcction for when the user press the escape button 
document.addEventListener("keydown", function(e){
    if(e.key === 'Escape' && !modal.classList.contains("hidden")){
    closeModal();
        }
    });