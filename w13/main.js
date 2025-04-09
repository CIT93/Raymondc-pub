const FORM = document.getElementById("form");
const output = document.getElementById("output");

function startExercise(exercise, reps, time) {
  return new Promise((resolve, reject) => {
    if (!exercise || reps < 10) {
      reject("Reps must be a number at least 10. Exercise name required.");
    } else {
      const startMsg = document.createElement("p");
      startMsg.textContent = `Start ${exercise} < > Goal reps: ${reps}`;
      output.appendChild(startMsg);
      resolve({ exercise, reps, time }); 
    }
  });
}

function stopExercise({ exercise, reps, time }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Stop ${exercise}`);
    }, parseInt(time) * 1000);
  });
}

function onSuccess(message) {
  const successMsg = document.createElement("p");
  successMsg.textContent = `Success: ${message}`;
  output.appendChild(successMsg);
}

function onError(error) {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = `ERROR: ${error}`;
  output.appendChild(errorMsg);
}

function onFinally() {
  const doneMsg = document.createElement("p");
  doneMsg.textContent = "FINALLY WE BE DONE YO!";
  output.appendChild(doneMsg);
}

function getFitExercise() {
  const heading = document.createElement("p");
  heading.textContent = "Submit to start!";
  output.appendChild(heading);

  FORM.addEventListener("submit", function (event) {
    event.preventDefault();

    output.innerHTML = ""; 

    const exercise = FORM.elements["exercise"].value;
    const reps = parseInt(FORM.elements["reps"].value);
    const time = parseInt(FORM.elements["time"].value);

    startExercise(exercise, reps, time)  
      .then(stopExercise)            
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally);
  });
}

getFitExercise();