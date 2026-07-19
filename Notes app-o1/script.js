const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input_box");

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement9("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

no