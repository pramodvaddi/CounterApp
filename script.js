// document.getElementById("count-el").innerText = 5;



// let count = 0;
// console.log(count);

// let MyAge = 30
// console.log(MyAge);

// let FirstBatch = 5;
// let SecondBatch = 9;

// let count = FirstBatch + SecondBatch
// console.log(count);

// let HumanAge = 30;
// let DogAgeRatio = 7

// let MyDogAge = HumanAge + DogAgeRatio;
// console.log(MyDogAge);

// let count = 10;
// count = count + 1;

// count = count + 10;
// console.log(count);

// let BonusPoints = 50;
// BonusPoints = BonusPoints + 50;
// BonusPoints = BonusPoints - 25;
// BonusPoints = BonusPoints - 5;

// console.log(BonusPoints);

// function Test() {
//     console.log(42)
// }
// Test();

// function CountDown() {
    
    
// }

// let lapOne = 34;
// let lapTwo = 40;
// let lapThree = 50;

// function Test() {
//     let sum = lapOne + lapTwo + lapThree
//     console.log(sum)
// }
// Test();

// let lapsCompleted = 0;

// function lapsIncrement() {

//     incrementLaps = lapsCompleted++;
//     return incrementLaps
// }
// laps = lapsIncrement();
// console.log(laps)

// let count = 0;

// function increment() {
//     console.log('clicked')
//     count = count + 1;

// }
// console.log(count)

// let countEl = document.getElementById('count-el');
// let count = 0;
// function increment() {
//     count = count + 1;
//     countEl.innerText = count

// }

// function save() {
//     console.log(count)
// }
// save();






// let userName = 'per '
// let message = 'You have three notifications'
// console.log(userName + message)

// let welcomeEl = document.getElementById('welcome-el');
// let name = 'James';
// let greeting = 'How are you? ';
// welcomeEl.innerText = greeting + name

let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let count = 0


function increment() {

    count += 1
    countEl.textContent = count 
}

function save() {
    let countSring = count + ' - '
    saveEl.innerText += countSring
    countEl.textContent = 0
    count = 0

}