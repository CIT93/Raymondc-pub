const TBL = document.getElementById("tab-data");
let currentEditIndex = null;

function renderTblHeading() {
  if (TBL.dataset.hasData === "false") {
    TBL.innerHTML = "";
    return null;
  }

  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";  // Update button (Edit)
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  // Delete button functionality
  btnDel.addEventListener("click", function () {
    data.splice(index, 1);  // Remove the data at the current index
    renderTbl(data);  // Re-render the table
  });

  // Update button functionality (populate the form with selected row data)
  btnEdit.addEventListener("click", function () {
    populateForm(index, data);  // Populate the form with the selected row's data
  });

  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data) {
  TBL.dataset.hasData = data.length > 0 ? "true" : "false";
  if (data.length === 0) {
    TBL.innerHTML = "";
    return;
  }
  const table = renderTblHeading();
  if (!table) return;
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

function populateForm(index, data) {
  const FORM = document.getElementById("form");
  const obj = data[index];
  currentEditIndex = index;

  // Populate the form fields with the data of the selected row
  for (const key in obj) {
    if (FORM.elements[key]) {
      FORM.elements[key].value = obj[key];
    }
  }

  // Handle form submission (Update or add data)
  FORM.onsubmit = function (e) {
    e.preventDefault();
    const formData = {};

    // Gather form data into an object
    Object.entries(FORM.elements).forEach(function ([key, element]) {
      if (element.tagName === "INPUT") {
        formData[key] = element.value;
      }
    });

    // If editing, update the data at the current index
    if (currentEditIndex !== null) {
      data[currentEditIndex] = { ...data[currentEditIndex], ...formData };
    } else {
      data.push(formData);  // Add a new data entry
    }

    // Re-render the table with the updated data
    renderTbl(data);
    FORM.reset();  // Reset the form fields
    currentEditIndex = null;  // Reset edit index after submitting
  };
}

export { renderTbl, renderTblHeading };