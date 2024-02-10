const display = document.getElementById('inputDisplay')

function appendToDisplay(input) {
    display.value += input
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
    display.value = eval(display.value);
    } catch (e) {
        display.value = 'waaa khona fllah !';
    }
}
