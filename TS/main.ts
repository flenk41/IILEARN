let gameName: string = "GOD";
let pricegame: number = 200;
let Userbalance: number = 100;
let isAvalible: boolean = true;

if (Userbalance >= pricegame) {
    console.log("Покупка разрешена");
}
else if (isAvalible !== true) {
    console.log("Игра не доступна");
}
else {
    console.log("Недостаточно денег");
}


// 3 задача
const username: string = "Flenk";
let balance: number = 5000;
const isOnline: boolean = true;

let age: number = 21;
age = 22;

const price: number = 1000;
const usBalance: number = 500;

if (usBalance >= price) {
    console.log("Денег достаточно");
}

// 4 задача

let score: number = 50;

if (score < 100 && score > 90) {
    console.log("Отлично");
}
else if (score > 70 && score < 89) {
    console.log("Хорошо");
}
else if (score > 50 && score < 69) {
    console.log("Зачет");
}
else if (score < 50) {
    console.log("Не зачет");
}
else {
    console.log("Некорректный результат");
}
// 5 