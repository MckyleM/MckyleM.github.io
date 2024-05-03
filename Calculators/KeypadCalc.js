let display = document.getElementById('display[type="text"]');
let buttons = document.querySelectorAll('input[type="button"]');
display.innerHTML='515402362511';
buttons.addEventListener('click', function(){
    display.innerHTML = this.value;
});
