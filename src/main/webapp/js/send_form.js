table = document.getElementById("result")

async function sendParametersOnGraph(x, y, r) {
    const dataToSend = {"X": x, "Y": y, "R": r};
    const response = await fetch("controller", {
        method: "GET",
        body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    console.log(typeof data.result)
    drawPoint(x, y, data.result)
    addToTable(x, y, r, data.result)
}

function addToTable(x, y, r, result) {
    const table = document.getElementById("result");
    const newRow = table.insertRow(0);
    newRow.insertCell().innerText = x;
    newRow.insertCell().innerText = y;
    newRow.insertCell().innerText = r;
    newRow.insertCell().innerHTML = result
}

async function sendParametersThroughForm(x, y, r) {
    rValue = parseInt(r)
    localStorage.setItem("rValue", rValue.toString())
    await send(x, y, rValue);
    redrawGraph(rValue)
    redrawPoint()
}

async function send(x, y, r) {
    const form = $('<form>', {
        action: "controller",
        method: "get"
    });
    const args = {X: x, Y: y, R: r};
    Object.entries(args).forEach(entry => {
        const [key, value] = entry;
        $('<input>').attr({
            type: "hidden",
            name: key,
            value: value
        }).appendTo(form);
    });
    form.appendTo('body').submit()
    console.log(form)
}