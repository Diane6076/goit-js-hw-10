// Завдання 1
// let count = 0;
// const interval = setInterval(() => {
//     count+=1;
//     console.log(`Повідомлення номер  ${count} `);
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 1000);

//Завдання 2
const elemts = document.querySelectorAll('.animated-item')

elemts.forEach( (element, index)=> {
setInterval(() => {
element.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
element.style.width = `${Math.random() * 100}px`;
element.style.height = `${Math.random() * 100}px`;
element.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

},(index + 1) * 1000)
})

//Завдання 3
const interactiveItems = document.querySelectorAll('.item-game')
const scoreText = document.querySelectorAll('#score')

let score = 0;
let gameStart = true;

const intervalId = setInterval(() => {
    if (!gameStart) {
        clearInterval(intervalId)
    }
}, 1000)

interactiveItems.forEach((item) => {
    item.addEventListener.forEach('click', () => {
        score += 1;
        scoreText.textContent = `Очки: ${score}`;
    })
})

setTimeout(() => {
    gameStart = false;
}, 2000)

//Завдання 4

const timeInput = document.querySelector('#input-time')

document.querySelector('#start-button').addEventListener('click', () => {
    let time = timeInput.value;
    setTimeout(() => {
        console.log(`Повідомлення було виведено через ${time}`);
    }, time * 1000)
})