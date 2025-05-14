import { TBL, FORM } from "./global.js";
import { studyData, saveLS } from "./storage.js";
const calculateAvg = (data) => {
    const reduceScore = data.reduce((sum, ea) => sum + ea.score, 0);
    const tableRef = document.getElementById("table-id");
    let newTR = tableRef.insertRow(-1);
    // Insert 6 empty cells
    for (let i = 0; i < 6; i++) {
      newTR.insertCell(-1).textContent = "";
    }
    // Second-to-last cell: label
    let newTD_1 = newTR.insertCell(-1);
    let newLabl = document.createTextNode(`Average Score`);
    newTD_1.appendChild(newLabl);
  
    // Last cell: value
    let newTD = newTR.insertCell(-1);
    let newText = document.createTextNode(`${Math.floor(reduceScore / data.length)}`);
    newTD.appendChild(newText);
  };

const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "First Name",
    "Last Name",
    "Study Stage",
    "Books Studied",
    "Messages Studied",
    "Score",
    "Comment",
    "Actions",
  ];

  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
};

const onUpdate = (index) => {
  studyData.splice(index, 1);
  saveLS(studyData);
  renderTbl();
};

const renderTblBtn = (obj, index) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", () => {
    onUpdate(index);
  });

  btnEdit.addEventListener("click", () => {
    FORM.elements["firstName"].value = obj.first;
    FORM.elements["lastName"].value =obj.last;
    FORM.elements["oneYearMeb"].value = obj.oneYearMeb;
    FORM.elements["completedFS"].value = obj.completedFS;
    FORM.elements["activeInDept"].value = obj.activeInDept;
    FORM.elements["belongsToCell"].value = obj.belongsToCell;
    FORM.elements["stages"].value = obj.stage;
    FORM.elements["books"].value = obj.booksStudied;
    FORM.elements["messages"].value = obj.messagesStudied;

    onUpdate(index);
  });

  return td;
};

const renderTblBody = () => {
  const tbody = document.createElement("tbody");

  studyData.forEach((obj, index) => {
    const tr = document.createElement("tr");

    const keys = [
        "first",
        "last",
      "stage",
      "booksStudied",
      "messagesStudied",
      "score",
      "comment",
    ];

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const td = renderTblBtn(obj, index);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
};

const renderTbl = () => {
  TBL.innerHTML = "";

  if (studyData.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody();
    table.appendChild(tbody);
    TBL.appendChild(table);
    calculateAvg(studyData);
  }
};

export { renderTbl };
