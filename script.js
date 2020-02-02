// console.log('Add validation!');

// let formInput = document.querySelector('form')
// let blankError = document.querySelector('.input-field')

// formInput.addEventListener('submit', function(){
// if(formInput.checkValidity.valueMissing){
// blankError = ('Please enter this information!')
// }
// })

let parkingForm = document.querySelector("#parking-form");
let boxes = document.querySelectorAll(".box");
console.log(boxes);
let errorMessages = document.querySelectorAll(".message")

parkingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    for (let box of boxes) {
        if (box.value !== "") {
            box.parentElement.classList.add("input-valid")
            console.log(box, "valid")
        }
        else {
            box.parentElement.classList.add("input-invalid");
            console.log(box, "invalid");
            box.insertAdjacentHTML("afterend", " is required");
            //afterbegin does not allow text on form, but shows in console.log//

            // for(let msg of errorMessages);
            // if (box.value === "") {
            //     console.log("is required");
            //     msg.insertAdjacentHTML("afterend", " is required");

            }


        }
    })