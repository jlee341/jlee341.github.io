window.onload = function () {
    const numberButtons = document.querySelectorAll(".number-button");
    const operatorButtons = document.querySelectorAll(".operator-button");
    const display = document.getElementById("display");

    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            appendToDisplay(button.textContent);
        });
    });

    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            appendToDisplay(button.textContent);
        });
    });

    document.getElementById("calculate").addEventListener("click", calculateResult);
};

function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

