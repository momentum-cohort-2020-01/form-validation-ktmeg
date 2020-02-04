// console.log('Add validation!');

// let formInput = document.querySelector('form')
// let blankError = document.querySelector('.input-field')

// formInput.addEventListener('submit', function(){
// if(formInput.checkValidity.valueMissing){
// blankError = ('Please enter this information!')
// }
// })

const parkingForm = document.querySelector('#parking-form')
const boxes = document.querySelectorAll('.box')
console.log(boxes)
// const errorMessages = document.querySelectorAll('.input-field')
// const name = document.querySelector('#name')

parkingForm.addEventListener('submit', function (e) {
  e.preventDefault()
  for (const box of boxes) {
    if (box.value !== '') {
      box.parentElement.classList.add('input-valid')
    } else {
      box.parentElement.classList.add('input-invalid')
      const newDiv = document.createElement('div')
      const ermsg = document.createTextNode('This field is required!')
      newDiv.appendChild(ermsg)
      box.parentElement.appendChild(newDiv)
    //   ermsg.classList.add('text-danger')
    }
  }
//   function clearErrorMessages ()


  // this works, but adds with every submit//
  // box.insertAdjacentHTML("afterend", "Required")
    // document.body.onload = addElement;
    // function addElement(){
    // const newDiv = document.createElement("div");
    // let ermsg = document.textContent("This field is required!");
    // newDiv.parentElement.createTextNode(ermsg);
    // document.body.insertAfter(newDiv, errorMessages);
    // console.log("working")    
    // afterbegin does not allow text on form, but shows in console.log//
    // for(let msg of errorMessages);
    // if (box.value === "") {
    //     console.log("is required");
    //     msg.insertAdjacentHTML("afterend", " is required");
  })
