let display = document.getElementById('display');
let buttons = document.querySelectorAll('input[type="button"]');
let img = document.getElementById('Calc_image')
let operation = null;
let storedNumber = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('Symbol') && this.value !== '.') {
            if (this.value === '=') {
                switch (operation) {
                    case '+':
                        display.value = Number(storedNumber) + Number(display.value);
                        break;
                    case '-':
                        display.value = Number(storedNumber) - Number(display.value);
                        break;
                    case 'x':
                        display.value = Number(storedNumber) * Number(display.value);
                        break;
                    case '÷':
                        display.value = Number(storedNumber) / Number(display.value);
                        break;
                }
                operation = null;
                storedNumber = null;
            } else {
                operation = this.value;
                storedNumber = display.value;
                display.value = '';
            }
        } else {
            display.value += this.value;
        }
    });
});

img.addEventListener('click', function() {

});