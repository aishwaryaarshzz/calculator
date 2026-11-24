
let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (expression === "") {
            return;
        }

        // Allow only calculator characters
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        display.value = Number(result.toPrecision(12));

    } catch (error) {
        display.value = "Error";
    }
}
