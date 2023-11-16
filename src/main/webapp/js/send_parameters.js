function sendParametersWithForm(x, y, r) {
    const form = $('<form>', {
        action: "controller",
        method: "get"
    });
    const args = {X: x, Y: y, R: r, action: "withForm"};
    Object.entries(args).forEach(entry => {
        const [key, value] = entry;
        $('<input>').attr({
            type: "hidden",
            name: key,
            value: value
        }).appendTo(form);
    });
    form.appendTo('body').submit()
}

async function sendParametersWithGraph(x, y, r) {
    const form = new FormData();
    form.append("X", x);
    form.append("Y", y);
    form.append("R", r);
    form.append("action", "withGraph")

    const url = "controller?" + new URLSearchParams(form).toString();
    const response = await fetch(url, { method: "get" });

    const data = await response.json();
    drawPoint(x, y, data.result)
    addToTable(x, y, r, data.result)
}
