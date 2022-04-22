// let dayOfWeek = 'Monday'

// console.log(dayOfWeek)

// dayOfWeek = 'Friday'

// console.log(`I can't wait for ${dayOfWeek}`)

// let animalInput = prompt('What is your favorite animal?')
// let colorInput = prompt('What is your favorite color?')
// let coloredAnimal = (`I've never seen a ${colorInput} ${animalInput}!`)
// alert(coloredAnimal)

//favorite breakfast...breakfast burritos
//favorite lunch...burritos
//favorite dinner...fish tacos

let timeOfDay = 1300
let mealChoice;

if(timeOfDay < 1200){
    mealChoice = 'Breakfast Burritos!'
}
else if(timeOfDay > 1200 && timeOfDay < 1700){
    mealChoice = 'Burritos!'
}
else{
    mealChoice = 'Fish Tacos!'
}

console.log(mealChoice)

//Random Number

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let randomInt;
randomInt = getRandomInt(0,10)

if(randomInt > 0 && randomInt < 2){
    console.log('Beatles')
}
if(randomInt > 3 && randomInt < 5){
    console.log('Beatles')
}
if(randomInt > 6 && randomInt < 8){
    console.log('Beatles')
}
if(randomInt === 9 || randomInt === 10){
    console.log('Beatles')
}

//Loops

