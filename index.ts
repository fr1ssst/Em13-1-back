import promptSync from 'prompt-sync';
const prompt = promptSync();

// Task 1

const number1Print:number = Number(prompt("1) Введть число від 10 до 50: "))

if(number1Print >= 10 && number1Print <= 50){
    console.log(`Число ${number1Print} в діапазоні`)
}else{
    console.log(`Число ${number1Print} поза діапазоном`)
}

// Task 2
function getRandomInt(min:number, max:number):number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function countTips(s:number, p:number){
    const tips = (s * p) / 100
    return tips
}
const randomNumber:number = getRandomInt(1, 6);

let sumPrint:number = Number(prompt("2) Введіть суму рахунку:"))
const randomNumberPrint:number = Number(prompt("Введіть число від 1 до 6:"))

if(randomNumberPrint >= 1 && randomNumberPrint <= 6){
    if(randomNumberPrint === randomNumber){
        console.log("Чайові:"+countTips(sumPrint, 5))
    }else if(randomNumberPrint !== randomNumber){
        console.log("Чайові:"+countTips(sumPrint, 65))
    }else{
        console.error("Помилка!")
    }
}else{
    console.log("Помилка! Число занадто велике, діапазон від 1 до 6!")
}

// Task 3
const agePrint = Number(prompt("Введіть свій вік:"))
if(agePrint <= 6 || agePrint >= 65){
    console.log("Безкоштовно")
}else if(agePrint >= 7 && agePrint <= 12){
    console.log("Дитячий квиток (50 грн)")
}else if(agePrint >= 13 && agePrint <= 17){
    console.log("Підлітковий квиток (80 грн)")
}else if(agePrint >= 18 && agePrint <= 64){
    console.log("Дорослий квиток (120 грн)")
}else if(agePrint === 0 || agePrint < 0 || agePrint > 100){
    console.error("Помилка")
}

// Task 4
const a:number = Number(prompt("Сторона a:"))
const b:number = Number(prompt("Сторона b:"))
const c:number = Number(prompt("Сторона c:"))
if(a === b && b === c && c === a){
    console.log("Рівносторонній")
}else if(a === b || b === c || c === a){
    console.log("Рівбедрений")
}