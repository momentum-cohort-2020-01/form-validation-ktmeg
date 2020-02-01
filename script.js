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
let errorMessages = document.querySelector('input-field')

parkingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    for (let box of boxes) {
        if (box.value !== "") {
            box.parentElement.classList.add("input-valid")
            console.log(box, "valid")
        }
        else {
            box.parentElement.classList.add("input-invalid")
            console.log(box, "invalid")
              
            

        }    
    }

    })