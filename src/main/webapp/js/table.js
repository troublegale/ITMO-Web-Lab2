function addToTable(x, y, r, result) {
    const table = document.getElementById("result");
    const newRow = table.insertRow(0);
    newRow.insertCell().innerText = x;
    newRow.insertCell().innerText = y;
    newRow.insertCell().innerText = r;
    newRow.insertCell().innerHTML = result ? "Hit" : "Miss"
}