import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const submitEl = document.getElementById("submitError")
function start(houseHoldMembers, houseSize, firstName, lastName) {
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
function validateField(event) {
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
  firstNameEl.addEventListener("blur", validateField);
  lastNameEl.addEventListener("blur", validateField);
  
 
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !== '';
const lastNameIsValid = lastNameEl.value !=='';
if (firstNameIsValid && lastNameIsValid){
    submitEl.textContent = '';
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseMembers, houseSize, firstName, lastName);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
}else {
   
  submitEl.textContent = "Form requires first name and last name ";
    
}
});

// the apartment score is not correct because in our js code we apt but in the html we have apartment. So the the scored is not being picked up by the html.
// we make this because, we want to guide the users give us the exact data we want.
// Did not have to update my code
// did not figure out how to code the button and just hard coded the information "Edit Del".
// Used a similar steps used in creating the heading for the body.
// td is block scoped  in the function and cannot be appended out of the block
// does it mean the idea of modules is to create components of related code and import them to the total code there by limitting the amount of code in the main code?
