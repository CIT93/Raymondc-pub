function determineHouseHoldpts(NumberInhousehold) {
console.log("inside the function")
if (NumberInhousehold === 1){
    CarbonFootprintPoints = CarbonFootprintPoints + 14;
} else if(NumberInhousehold === 2) {
    CarbonFootprintPoints = CarbonFootprintPoints + 12;
} else if(NumberInhousehold === 3){
    CarbonFootprintPoints = CarbonFootprintPoints + 10;  
} else if(NumberInhousehold === 4){
    CarbonFootprintPoints = CarbonFootprintPoints + 8;
} else if(NumberInhousehold === 5) {
    CarbonFootprintPoints = CarbonFootprintPoints + 6;
} else if (NumberInhousehold === 6){
    CarbonFootprintPoints = CarbonFootprintPoints + 4;
} else if(NumberInhousehold > 6) {
    CarbonFootprintPoints = CarbonFootprintPoints + 2;
}
    console.log(`Based on the number of number of the household of ${NumberInhousehold} the points would be ${CarbonFootprintPoints}.`);
}
let CarbonFootprintPoints = 0;
const NumberInhousehold = 3;

//space
determineHouseHoldpts(3)
determineHouseHoldpts(4)
