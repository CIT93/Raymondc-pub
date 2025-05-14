import {
    FORM,
    ONEYM,
    COMPFS,
    ACTDEPT,
    BELTS,
    SUBMIT,
    OUTPUT,
    FNAME,
    LNAME
  } from "./global.js";
  import { renderTbl } from "./render.js";
  import { saveLS, studyData } from "./storage.js";
  import { StudyEvaluator } from "./study.js";
  
  // Field validation
  const validateField = (event) => {
    const field = event.target;
    const fieldError = document.getElementById(`${field.id}Error`);
  
    if (field.value === "") {
      fieldError.textContent = `${field.id} is required`;
      field.classList.add("invalid");
    } else {
      fieldError.textContent = "";
      field.classList.remove("invalid");
    }
  };
  
  // Attach blur event listeners for validation
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);
  ONEYM.addEventListener("blur", validateField);
  COMPFS.addEventListener("blur", validateField);
  ACTDEPT.addEventListener("blur", validateField);
  BELTS.addEventListener("blur", validateField);
  
  // Handle form submission
  FORM.addEventListener("submit", function (e) {
    e.preventDefault();
  const firstName = FNAME.value;
  const lastName = LNAME.value
    const books = parseInt(FORM.books.value);
    const messages = parseInt(FORM.messages.value);
    const stage = FORM.stages.value;
    const oneYearMeb = ONEYM.value;
    const completedFS = COMPFS.value;
    const activeInDept = ACTDEPT.value;
    const belongsToCell = BELTS.value;
  
    // Remove previous "not qualified" message if it exists
    const existingMessage = document.getElementById("not-qualified-msg");
    if (existingMessage) {
      existingMessage.remove();
    }
  
    if (FNAME.value !== "" &&
         LNAME.value !== "" &&
      oneYearMeb !== "" &&
      completedFS !== "" &&
      activeInDept !== "" &&
      belongsToCell !== ""
    ) {
      SUBMIT.textContent = "";
  
      // Use updated constructor
      const student = new StudyEvaluator(
        firstName,
        lastName,
        stage,
        books,
        messages,
        oneYearMeb,
        completedFS,
        activeInDept,
        belongsToCell
      );
  
      if (!student.qualified) {
        const notQualified = document.createElement("p");
        notQualified.id = "not-qualified-msg";
        notQualified.textContent = student.stageInfo.comment;
        notQualified.style.color = "red";
        OUTPUT.appendChild(notQualified);
        return;
      }
  
      studyData.push({
        first: firstName,
        last: lastName,
        oneYearMeb: ONEYM.value,
        completedFS: COMPFS.value,
        activeInDept: ACTDEPT.value,
        belongsToCell: BELTS.value,
        stage: student.currentStage,
        booksStudied: student.booksStudied,
        messagesStudied: student.messagesStudied,
        score: student.totalScore,
        comment: student.stageInfo.comment,
      });
  
      saveLS(studyData);
      renderTbl();
      FORM.reset();
    } else {
      SUBMIT.textContent = "All fields are required";
    }
  });
  
  // Initial render
  renderTbl();
  