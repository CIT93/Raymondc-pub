import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;

  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePts,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

// function to validate a single field
const validateField = (event) => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};
// attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    //start( FNAME.value, LNAME.value, parseInt(FORM.housem.value),  FORM.houses.value);
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.housem.value),
      FORM.houses.value,
      FORM.food.value
    );
    // fpObj.houseSizePoints();
    // fpObj.houseHoldPoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name ";
  }
});

/*const me = {
  name: "Raymond",
  hairColor: "Black",
  location: "Office",
  sleepScore: 95,
  introduce: function(){
    console.log(this);
    console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now`)
  }

}

const you = {
  name: "Jan",
  hairColor: "Brown",
  location: "Home",
  sleepScore: 55,
  introduce: function(){
    console.log(this);
    console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now`)
  }

}
me.introduce();
you.introduce()*/

/*class Human {
  constructor(name, hairColor, location, sleepScore){
  this.name = name
  this.hairColor = hairColor
  this.location = location
  this.sleepScore = sleepScore
  }
  introduce(){
   
    console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleopScore of ${this.sleepScore}!`) 
  }
}
const raymond = new Human( "Raymond", "Black", "Office", 95);
const jane  = new Human ("Jan", "Brown", "Home", 55);
raymond.introduce();
jane.introduce();
raymond.hrv = 50;*/
