console.log("CarbonFootprint");
// How to calculate your carbon footprint -https://www.wikihow.com/Calculate-Your-Carbon-FootprintLinks to an external site.
// Method 1
// Number of house hold menbers more 5
const myHouseholdmenbers = 2;
// Large Housesize
const myHousesize = 10;
// Foodchoice eat domestic meat daily
const myFoodchoice = 10;
// water consumption dish washer ran one to three times daily
const myWater = 2;
// less than three purchases per year
const myPurchases = 4;
// half of a garbage can filled weekly
const myWaste = 5;
// recycle every waste that need recycling
const myRecyclewaste = 0;
// personal vehicle transportation of 1000 to 10000 and flight to nearby state
const myTransportation = 12;
// My total carbon footprint 
const myTotalcfp = myHouseholdmenbers + myHousesize + myFoodchoice + myWater + myPurchases + myWaste + myRecyclewaste + myTransportation;
const myHeading = document.querySelector("h2");
myHeading.textContent = myTotalcfp;



