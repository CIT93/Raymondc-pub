console.log("Hello from inside the main.js file");

//let myVar;

const myVar = "Raymond";
const myValType = typeof(myVar);

console.log("myValType" + myValType);
console.log(`myValType ${myValType}`);

if(myValType === "number") {
  console.log(`this 12 will run`);  
} else {
    console.log(`this 14 will not run`);
}

function runNow() {
    if(myValType === "number") {
        console.log(`this 12 will run`);  
      } else {
          console.log(`this 14 will not run`);
      }
}
runNow()
runNow()