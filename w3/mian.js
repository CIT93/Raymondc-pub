function determineHouseHoldpts(numberInhousehold) {
console.log("inside the function")
if (numberInhousehold === 1){
    carbonFootprintPoints = carbonFootprintPoints + 14;
} else if(numberInhousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
} else if(numberInhousehold === 3){
    carbonFootprintPoints = carbonFootprintPoints + 10;  
} else if(numberInhousehold === 4){
    carbonFootprintPoints = carbonFootprintPoints + 8;
} else if(numberInhousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
} else if (numberInhousehold === 6){
    carbonFootprintPoints = carbonFootprintPoints + 4;
} else if(numberInhousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
}
    console.log(`Based on the number of number of the household of ${numberInhousehold} the points would be ${carbonFootprintPoints}.`);
}
let carbonFootprintPoints = 0;
const numberInhousehold = 3;

//space
determineHouseHoldpts(3)
determineHouseHoldpts(4)
//If you have a large house, then add 10 points to your score.
//If you have a medium-sized house, then add 7 points.
//If you have a small house, then add 4 points.
//If you live in an apartment, then add 2 points

function myHouseholdSizecfp(householdSize) {
    console.log("inside the householdSize function");
    if(householdSize === "large"){
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if(householdSize === "medium"){
        carbonFootprintPoints = carbonFootprintPoints + 7;  
    } else if(householdSize === "small"){
        carbonFootprintPoints = carbonFootprintPoints + 4;
    }else if(householdSize === "Apartment"){
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on ${householdSize} household size the points would be ${carbonFootprintPoints}.`);    
}
 
 myHouseholdSizecfp("large")
 