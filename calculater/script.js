const display = document.getElementById("display");

// Display-ல் value add செய்ய
function appendToDisplay(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Display clear செய்ய
function clearDisplay() {
    display.value = "0";
}

// கடைசி character delete செய்ய
function deleteLast() {
    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}