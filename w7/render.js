const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  let existingTable = document.getElementById("table-data");
  if (!existingTable) {
    const table = document.createElement("table");
    table.id = "table-data";

    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Total"];

    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tbody.id = "table-body";
    table.appendChild(tbody);

    TBL.appendChild(table);
  }
}

function renderTbl(data) {
  renderTblHeading();

  const tbody = document.getElementById("table-body");

  tbody.innerHTML = "";

  data.forEach(function (obj) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    const tdTotal = document.createElement("td");

    tdName.textContent = obj.firstName;
    tdTotal.textContent = obj.cfpTotal;

    tr.appendChild(tdName);
    tr.appendChild(tdTotal);
    tbody.appendChild(tr);
  });
}
/*const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);

  tbody.appendChild(tr);*/

export { renderTbl, renderTblHeading };
