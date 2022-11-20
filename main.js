const inputEl1 = document.getElementById('summand1');
const inputEl2 = document.getElementById('summand2');

const firstSum = document.querySelectorAll('.sum1');
const secondSum = document.querySelectorAll('.sum2');
const thirdtSum = document.querySelectorAll('.sum3');
const fourth = document.querySelectorAll('.sum4');

const btnCounting = document.querySelector('.counting');
let sums = document.querySelectorAll('.sum');
let word = document.querySelector('.right');

const iconOperation = document.querySelectorAll('.operation');
const contentBoxes = document.querySelectorAll('[data-tab-content]');


if (inputEl1.value === '' && inputEl2.value === '') {
    for (i = 0; i < sums.length; i++) {
        sums[i].innerHTML = 0;
    };
}

function summation() {

    let summand1 = Number(inputEl1.value);
    let summand2 = Number(inputEl2.value);
    let sum = summand1 + summand2;

    firstSum.innerHTML = sum;
    secondSum.innerHTML = Math.floor((Math.random() * sum) * 10);
    thirdtSum.innerHTML = Math.floor((Math.random() * sum));
    fourth.innerHTML = Math.floor((Math.random() * sum) - 1);
    
    shuffleBtn();
    
    for (i = 0; i < sums.length; i++) {
        let item = sums[i];

        item.addEventListener('click', (event) => {
            if (+item.innerHTML === sum) {
                word.innerHTML = 'Правильно';
            } else {
                word.innerHTML = 'Не правильно';
            }
        });
    };
}

function shuffleBtn() {
    let arrBtns = [
        firstSum.innerHTML,
        secondSum.innerHTML,
        thirdtSum.innerHTML,
        fourth.innerHTML
    ];
    let shuffleBtn = document.querySelectorAll('.sum');
    let shuffleArr = arrBtns.sort(() => Math.random() - 0.5);
    shuffleBtn.forEach((e, i) => e.textContent = shuffleArr[i]);
};

document.querySelector('.menu').addEventListener('click', (event) => {
    if(event.target.classList.contains('summation')) {
       
       document.querySelector('.sign').innerHTML = '+';
       btnCounting.addEventListener('click', (event) => {
            summation();
       });
       
    } else if(event.target.classList.contains('substraction')) {
        
        document.querySelector('.sign').innerHTML = '-';
        btnCounting.addEventListener('click', (event) => {
            subtraction();
       });
        
    } else if(event.target.classList.contains('multiply')) {

        document.querySelector('.sign').innerHTML = 'x';
       btnCounting.addEventListener('click', (event) => {
            multiply();
       });
    } else if(event.target.classList.contains('division')) {

        document.querySelector('.sign').innerHTML = ':';
       btnCounting.addEventListener('click', (event) => {
            division();
       });
    }

});




function subtraction() {
    let summand1 = Number(inputEl1.value);
    let summand2 = Number(inputEl2.value);
    let sub = summand1 - summand2;
    firstSum.innerHTML = sub;
    secondSum.innerHTML = Math.floor((Math.random() * sub) * 10);
    thirdtSum.innerHTML = Math.floor((Math.random() * sub));
    fourth.innerHTML = Math.floor((Math.random() * sub) - 1);
    
    shuffleBtn();

    for (i = 0; i < sums.length; i++) {
        let item = sums[i];

        item.addEventListener('click', (event) => {
            if (+item.innerHTML === sub) {
                word.innerHTML = 'Правильно';
            } else {
                word.innerHTML = 'Не правильно';
            }
        });
    };
}

function multiply() {
    let summand1 = Number(inputEl1.value);
    let summand2 = Number(inputEl2.value);
    let multiply = summand1 * summand2;
    firstSum.innerHTML = multiply;
    secondSum.innerHTML = Math.floor((Math.random() * multiply) * 10);
    thirdtSum.innerHTML = Math.floor((Math.random() * multiply));
    fourth.innerHTML = Math.floor((Math.random() * multiply) - 1);
    
    shuffleBtn();

    for (i = 0; i < sums.length; i++) {
        let item = sums[i];

        item.addEventListener('click', (event) => {
            if (+item.innerHTML === multiply) {
                word.innerHTML = 'Правильно';
            } else {
                word.innerHTML = 'Не правильно';
            }
        });
    };
}

function division() {
    let summand1 = Number(inputEl1.value);
    let summand2 = Number(inputEl2.value);
    let division = summand1/summand2;
    firstSum.innerHTML = division;
    secondSum.innerHTML = Math.floor((Math.random() * division) * 10);
    thirdtSum.innerHTML = Math.floor((Math.random() * division));
    fourth.innerHTML = Math.floor((Math.random() * division) - 1);
    
    shuffleBtn();

    for (i = 0; i < sums.length; i++) {
        let item = sums[i];

        item.addEventListener('click', (event) => {
            if (+item.innerHTML === division) {
                word.innerHTML = 'Правильно';
            } else {
                word.innerHTML = 'Не правильно';
            }
        });
    };
}