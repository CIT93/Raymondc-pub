/*const cfpData = [];
function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if(size === "large") {
      houseSizePoints = 10;
    } else if(size === "medium") {
      houseSizePoints = 7;
    } else if (size === "small") {
      houseSizePoints = 4;
    } else if (size === "apt") {
      houseSizePoints = 2;
    }
      return houseSizePoints;
  }
  
  function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
     return houseHoldPoints;
  }*/
/*function displayOutput(){
  for (obj of cfpData){
console.log(obj);
const output = document.getElementById("output");
const newH2 = document.createElement("h2");
newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
const newH3 = document.createElement("h3");
newH3.textContent = `Based on Number in Household and Size of Home`
const newP = document.createElement("p");
  newP.textContent = `This number is based on the number in household of ${obj.houseM} (score: ${obj.houseMPTS}) `;
  newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS})`;
  
output.appendChild(newH2);
output.appendChild(newH3);
output.appendChild(newP);
  }
}
 
 
function start(houseHoldMembers, houseSize) {
const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
const houseSizePts = determineHouseSizePts(houseSize);
const total = houseHoldPTS + houseSizePts;
 

cfpData.push({
  houseM: houseHoldMembers,
  houseS: houseSize,
  houseMPTS: houseHoldPTS,
  houseSPTS: houseSizePts,
  cfpTotal: total
});
 
}*/



//function displayOutput(myCfpObj) {
//for(myCfpObj) {
//const output = document.getElementById("Output");
//const newP = document.createElement("p");
//const newH2 = document.createElement("h2");
//newH2.textContent = `Carbon Footprint total is ${arr[4]}`;
//output.appendChild(newH2);
//const newH3 = document.createElement("h3");
//newH3.textContent = `Based on Number in Household and Size of Home`;
//newP.textContent = `This number is based on the number of housedhold of ${arr[0]} (score: ${arr[3]})`;
//newP.textContent += `and a ${arr[1]} size of home (score: ${arr[2]})`;
//output.appendChild(newH2);
//output.appendChild(newH3);
//output.appendChild(newP);
//}
//}

/* start(1, "apt");
 start(2, "apt");
 start(3, "apt");
 start(4, "apt");
 start(5, "apt");
displayOutput();*/

// an array of of onjects


const moviesArr = [
  { title: "Oppenheimer", year: 2023, rating: 8.3, watched: 3 },
  { title: "Past Lives", year: 2023, rating: 7.8, watched: 1 },
  { title: "Death on the Nile", year: 2022, rating: 8.2, watched: 6 },
  { title: "Uncharted", year: 2022, rating: 8.5, watched: 4 },
];
const moviesTable = document.getElementById("movies-data");
function displayOutMovies() {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = ["Title", "Year", "Rating", "Watched"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  moviesArr.forEach(function (obj) {
    const tr = document.createElement("tr");

    const tdTitle = document.createElement("td");
    const tdYear = document.createElement("td");
    const tdRating = document.createElement("td");
    const tdWatched = document.createElement("td");

    tdTitle.textContent = obj.title;
    tdYear.textContent = obj.year;
    tdRating.textContent = obj.rating;
    tdWatched.textContent = obj.watched;

    tr.appendChild(tdTitle);
    tr.appendChild(tdYear);
    tr.appendChild(tdRating);
    tr.appendChild(tdWatched);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  moviesTable.appendChild(table);
}

displayOutMovies();