function determineHouseHoldpts(NumberInhousehold) {
console.log("inside the function")
if (NumberInhousehold === 1){
    carbonFootprintPoints = carbonFootprintPoints + 14;
} else if(NumberInhousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
} else if(NumberInhousehold === 3){
    carbonFootprintPoints = carbonFootprintPoints + 10;  
} else if(NumberInhousehold === 4){
    carbonFootprintPoints = carbonFootprintPoints + 8;
} else if(NumberInhousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
} else if (NumberInhousehold === 6){
    carbonFootprintPoints = carbonFootprintPoints + 4;
} else if(NumberInhousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
}
    console.log(`Based on the number of number of the household of ${NumberInhousehold} the points would be ${carbonFootprintPoints}.`);
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

function myHouseholdSizecfp(householdsize) {
    console.log("inside the householdsize function");
    if(householdsize === "large"){
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if(householdsize === "medium"){
        carbonFootprintPoints = carbonFootprintPoints + 7;  
    } else if(householdsize === "small"){
        carbonFootprintPoints = carbonFootprintPoints + 4;
    }else if(householdsize === "Apartment"){
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on ${householdsize} household size the points would be ${carbonFootprintPoints}.`);    
}
 
 myHouseholdSizecfp("large")
 