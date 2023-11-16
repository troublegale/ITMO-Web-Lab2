const xInput = document.getElementById("x-input")
const calcButton = document.getElementById("calc-button")
const inputErrorMessage = document.getElementById("input-message")
const checkboxes = document.querySelectorAll('.r_checkbox');

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
        checkRBoxes()
        rValue = parseInt(this.value)
        localStorage.setItem("rValue", rValue.toString())
        redrawGraph(rValue)
    });
});
xInput.addEventListener("input", () => {
    xInput.setCustomValidity("")
})
calcButton.onclick = handleCalculateButtonPress

function handleCalculateButtonPress() {
    if (checkInput() && checkRBoxes()) {
        let x = parseFloat(xInput.value)
        let y = parseFloat(document.getElementById("y-select").value)
        sendParametersWithForm(x, y, rValue)
    }
}

function checkInput() {
    return checkForInput() && checkInputFormat() && checkFracLength() && checkValue()
}

function checkForInput() {
    xInput.validity.valid = false
    if (xInput.value.length < 1) {
        setInputMessage("Please, enter the X variable")
        showMessage(inputErrorMessage)
        return false
    }
    setInputMessage("")
    hideMessage(inputErrorMessage)
    return true
}

function checkInputFormat() {
    let pattern = /^-?\d+(\.\d+)?$/
    let value = xInput.value.trim()
    if (pattern.test(value) && value.match(pattern)[0].length === value.length) {
        setInputMessage("")
        hideMessage(inputErrorMessage)
        return true
    }
    setInputMessage("The input is not a decimal number.")
    showMessage(inputErrorMessage)
    return false
}

function checkFracLength() {
    if (xInput.value.includes(".")) {
        if (xInput.value.split(".")[1].length > 13) {
            setInputMessage("The fractional part of the entered number is too long, precise calculation is impossible.")
            showMessage(inputErrorMessage)
            return false
        }
    }
    setInputMessage("")
    hideMessage(inputErrorMessage)
    return true
}

function checkValue() {
    let xCoordinate = parseFloat(xInput.value)
    if (-5 < xCoordinate && xCoordinate < 5) {
        setInputMessage("")
        hideMessage(inputErrorMessage)
        xInput.setCustomValidity("")
        return true
    }
    setInputMessage("Entered number is out of the set range.")
    showMessage(inputErrorMessage)
    return false
}

function checkRBoxes() {
    let checkedXBoxes = document.querySelectorAll('input[name="rbox"]:checked').length
    let errorMessage = document.getElementById("r-message");
    if (checkedXBoxes !== 1) {
        showMessage(errorMessage)
        return false
    } else {
        hideMessage(errorMessage)
        return true
    }
}

function setInputMessage(message) {
    xInput.setCustomValidity(message)
    inputErrorMessage.innerHTML = message.length !== 0 ? "⬅ " + message : ""
    showMessage(inputErrorMessage)
}

function showMessage(errorMessage) {
    errorMessage.style.display = "inline";
}

function hideMessage(errorMessage) {
    errorMessage.style.display = "none";
}
