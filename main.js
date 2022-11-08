let inputEl1 = document.querySelector('.summand1');
let inputEl2 = document.querySelector('.summand2');
let firstSum = document.querySelector('.sum1');
let secondSum = document.querySelector('.sum2');
let thirdtSum = document.querySelector('.sum3');
let fourth = document.querySelector('.sum4');
let btnSum = document.querySelector('.counting');
let sums = document.querySelectorAll('#sum');


function calculation() {
    let summand1 = Number(inputEl1.value);
    let summand2 = Number(inputEl2.value);
    let sum = summand1 + summand2;
    firstSum.innerHTML = sum;
    secondSum.innerHTML = Math.floor((Math.random() * sum) * 10);
    thirdtSum.innerHTML = Math.floor((Math.random() * sum));
    fourth.innerHTML = Math.floor((Math.random() * sum)- 1);
    let arrBtns = [
        firstSum.innerHTML,
        secondSum.innerHTML,
        thirdtSum.innerHTML,
        fourth.innerHTML
    ];
    let shuffleBtn = document.querySelectorAll('#sum');
    let shuffleArr = arrBtns.sort(() => Math.random() - 0.5);
    shuffleBtn.forEach((e,i) => e.textContent = shuffleArr[i]);



    for (i = 0; i < sums.length; i++) {
        let item = sums[i];
        item.addEventListener('click', (event) => {
            if (+item.innerHTML === sum) {
                document.querySelector('.right').innerHTML = 'Правильно';
            } else {
                document.querySelector('.right').innerHTML = 'Не правильно';
            }

        });
    };
}


btnSum.addEventListener('click', (event) => {
    calculation();

});


