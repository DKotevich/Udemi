for (let i = 1; i <= 15; i++) {
    console.log(i);
}


let result = '';
const length = 15;
for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
//Metki
let str = '';

loop1: for (let i = 0; i < 5; i++) {
    if (i === 1) {
        continue loop1;
    }
    str = str + i;
}

console.log(str);
// Expected output: "0234"


//ZADACHI CIKLY
// 1
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// 2
loop2: for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i == 13) {
        break loop2;
    }
}

// 3
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
// 4
let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
//5 
let array = [];
for (i = 5; i <= 10; i++) {
    array[i - 5] = i;
}
console.log(array);

// Cikly No2 
// 1
let arr = [5, 6, 7, 8, 9, 10];
let result = [];
for (i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);

//2
const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < (data.length); i++) {
    if (typeof data[i] === 'number') {
        data[i] = +(data[i] * 2);
    }
    else {
        data[i] = (data[i] + (' - done'));
    }
}
console.log(data);
//elka
const lines = 6;
let result = '';
let counter = lines;
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i < lines; i++) {

    for (let k = 1; k < counter; k++) {
        result += ' ';
    }
    counter--;

    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += "\n"
}
console.log(result);


// Место для первой задачи
function sayHello(text) {
    return ("Привет, " + text + "!");
}


// Место для второй задачи
function returnNeighboringNumbers(number) {
    var arr = [];
    arr[0] = (number - 1);
    arr[1] = (number);
    arr[2] = (number + 1);
    return (arr);
}
returnNeighboringNumbers(5);

// Место для третьей задачи
function getMathResult(x, y) {
    if (y <= 0 || (typeof (y) != 'number')) {
        console.log(x)
    }
    else {
        let result = String(x);
        for (let i = 2; i <= y; i++) {
            result = result + '---' + (x * i);
        }
        console.log(result);
    }
}
getMathResult(3, 10)

// Место для первой задачи
function calculateVolumeAndArea(l) {
    if (l <= 0 || (typeof (l) != 'number') || !(Number.isInteger(l))) {
        console.log("При вычислении произошла ошибка")
    }
    else {
        console.log(`Объем куба: ${l * l * l}, площадь всей поверхности: ${6 * (l * l)}`
        )
    }
}
calculateVolumeAndArea(-15)

// Место для второй задачи
function getCoupeNumber(x) {
    if (x < 0 || (typeof (x) != 'number') || !(Number.isInteger(x))) {
        console.log("Ошибка. Проверьте правильность введенного номера места")
    }
    else if (x === 0 || x > 36) {
        console.log("Таких мест в вагоне не существует")
    }
    else {
        let result = 0;
        for (let i = 0; i <= x; i = i + 4) {
            result = result + 1;
        }
        console.log(result)
    }
}
getCoupeNumber(30)