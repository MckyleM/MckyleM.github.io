let Border = document.createElement('div');
let TopButton = new Array();
let ButtonOne = document.createElement('button');
let ButtonTwo = document.createElement('button');
let ButtonThree = document.createElement('button');
let ButtonFour = document.createElement('button');
let ButtonFive = document.createElement('button');
let ButtonSix = document.createElement('button');
let ButtonSeven = document.createElement('button');
let ButtonEight = document.createElement('button');
let ButtonNine = document.createElement('button');
let ButtonZero = document.createElement('button');
let ButtonPlus = document.createElement('button');
let ButtonMinus = document.createElement('button');
let ButtonEqual = document.createElement('button');

Border.classList.add('border');

ButtonOne.textContent = '1';

ButtonTwo.textContent = '2';

ButtonThree.textContent = '3';

ButtonFour.textContent = '4';

ButtonFive.textContent = '5';

ButtonSix.textContent = '6';

ButtonSeven.textContent = '7';

ButtonEight.textContent = '8';

ButtonNine.textContent = '9';

ButtonZero.textContent = '0';

ButtonPlus.textContent = '+';

ButtonMinus.textContent = '-';

ButtonEqual.textContent = '=';

ButtonOne.classList.add('TopButton');

ButtonTwo.classList.add('TopButton');

ButtonThree.classList.add('TopButton');

ButtonFour.classList.add('MiddelButton');

ButtonFive.classList.add('MiddelButton');

ButtonSix.classList.add('MiddelButton');

ButtonSeven.classList.add('BottomButton');

ButtonEight.classList.add('BottomButton');

ButtonNine.classList.add('BottomButton');

ButtonZero.classList.add('ZeroButton');

ButtonPlus.classList.add('PlusButton');

ButtonMinus.classList.add('MinusButton');

ButtonEqual.classList.add('EqualButton');

Border.appendChild(ButtonOne);

Border.appendChild(ButtonTwo);

Border.appendChild(ButtonThree);

Border.appendChild(ButtonFour);

Border.appendChild(ButtonFive);

Border.appendChild(ButtonSix);

Border.appendChild(ButtonSeven);

Border.appendChild(ButtonEight);

Border.appendChild(ButtonNine);

Border.appendChild(ButtonZero);

Border.appendChild(ButtonPlus);

Border.appendChild(ButtonMinus);

Border.appendChild(ButtonEqual);

document.body.appendChild(Border);

Border.style.float = 'Center';

Border.style.marginLeft = '30%';

Border.style.width = '300px; height = 755px ';
Border.style.backgroundColor = 'red';
ButtonOneStyle = function(){
ButtonOne.style.width = '25%';
ButtonOne.style.float = 'left';
ButtonOne.style.marginTop = '10px';
ButtonOne.style.backgroundColor = 'white';
ButtonOne.style.backgroundSize = '500px; ';
};
ButtonTwo.style.width = '25%';
ButtonTwo.style.float = 'left';

ButtonThree.style.width = '25%';

ButtonFour.style.width = '25%';

ButtonFive.style.width = '25%';

ButtonSix.style.width = '25%';

ButtonSeven.style.width = '25%';

ButtonEight.style.width = '25%';

ButtonNine.style.width = '25%';
ButtonOneStyle()





