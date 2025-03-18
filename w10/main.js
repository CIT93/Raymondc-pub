import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = (houseHoldMembers, houseSize, firstName, lastName) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
}
renderTbl(cfpData); 

// function to validate a single field
const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
    if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
    } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
    }
  }
  // attach blur event listeners
  FNAME.addEventListener("blur", validateField);
  LNAME.addEventListener("blur", validateField);
  
 
FORM.addEventListener("submit", e => {
  e.preventDefault();
 
if ( FNAME.value !== '' && LNAME.value !=='' ){
    SUBMIT.textContent = '';
  start( parseInt(FORM.housem.value),  FORM.houses.value, FNAME.value, LNAME.value);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
}else {
   
  SUBMIT.textContent = "Form requires first name and last name ";
    
}
});
// rest operator
//const add2 = function(...a){
//  return 2+a[3];
//}

//const results = add2(1, 2, 3,4);

// arrow function

const add2 = a =>  2+a;



const results = add2(100);

//IIFE
const a = 3; 

(function(a){
console.log("inside IIFE")
console.log(a)
})(a);


// the apartment score is not correct because in our js code we apt but in the html we have apartment. So the the scored is not being picked up by the html.
// we make this because, we want to guide the users give us the exact data we want.
// Did not have to update my code
// did not figure out how to code the button and just hard coded the information "Edit Del".
// Used a similar steps used in creating the heading for the body.
// td is block scoped  in the function and cannot be appended out of the block
// does it mean the idea of modules is to create components of related code and import them to the total code there by limitting the amount of code in the main code?
// no need to update function
