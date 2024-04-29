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
// Metki
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
// 5 
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

// 2
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
// Elka
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


// Место для первой задачи
function getTimeFromMinutes(x) {
    let h = Math.floor(x / 60), m = x % 60, hh = 'час', mm = 'мину'
    if (x < 0 || String(x).includes('.') || (typeof x === 'string')) {
        console.log("Ошибка, проверьте данные");
    }
    else {
        if (h >= 2 && h <= 4) {
            hh = hh.concat('а');
        }
        else if (h >= 5 && h <= 10 || h === 0) {
            hh = hh.concat('ов');
        }

        if (m < 10) {
            if (m == 1) {
                mm = mm.concat('та');
            }
            else if (m >= 2 && m <= 4) {
                mm = mm.concat('ты');
            }
            else {
                mm = mm.concat('т');
            }
        }
        if (m >= 20) {
            if ((String(m)[1]) == 1) {
                mm = mm.concat('та');
            }
            else if ((String(m)[1]) >= 2 && (String(m)[1] <= 4)) {
                mm = mm.concat('ты');
            }
            else {
                mm = mm.concat('т');
            }
        }
        else if (m >= 10 && m <= 20) {
            mm = mm.concat('т');
        }
    }
    console.log(`Это ${h} ${hh} и ${m} ${mm}`);
}
getTimeFromMinutes(131)


function findMaxNumber(a, b, c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);


function fib(x) {
    let y = 0;
    let res = [0, 1, 1];
    let res2 = "";
    if (x == 1) {
        return ("0");
    }
    else if (x == 0 || String(x).includes('.') || typeof x !== 'number') {
        return ("");
    }
    else {
        for (let i = 0; i <= x - 4; i++) {
            y = ((res[i + 1]) + (res[i + 2]))
            res[i + 3] = y;
        }
        res2 = res.join(" ").replace(/,/g, "");
        return (String(res2))
    }
}
fib(7)

// DESTRUKTURIZACYA OBEKTOV
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '3 month'
    },

    showAgeAndLangs: function (plan) {
        const { age } = plan;
        const { languages } = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    const { exp } = personalPlanPeter.skills
    return (exp);
}


function showProgrammingLangs(plan) {
    let str = '';
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}


// Zadachi na rabotu s massivami

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let output = "Семья состоит из: ";
    if (!arr.length) {
        return ('Семья пуста');
    }
    else {
        output += (String(family)).replace(/,/g, " ");
        return (output);
    }
}


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let out = "";
    for (let i = 0; i < favoriteCities.length; i++) {
        out += `${String(favoriteCities[i]).toLowerCase()}\n`;
    }
    console.log(out);
}
standardizeStrings(favoriteCities)


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

// Primery
// перебор массива
const arr = [2, 3, 6, 8, 10];
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


const str = prompt("", "");
const products = str.split(", "); // запишет в массив то что вводилось строкой
arr.sort(compareNum);  // sortiruet kak chisla !!!
console.log(products.join('; ')); //обратно склеял массив через точку с запятой

function compareNum(a, b) { // Pravilnaya sortirovka (sortiruet ne kak stroki)
    return a - b;
}

//Perebor

const arr = [12, 3, 6, 8, 10];
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


// Zadachi:

const someString = 'This is some strange string';
function reverse(str) {
    if (typeof (str) !== 'string') {
        return "Ошибка!";
    }
    let srtToArray = str.split("").reverse();
    return (srtToArray.join(""));
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = "Доступные валюты:\n";
    if (!arr.length) {
        result += 'Нет доступных валют';
    }
    else {
        if (arr.indexOf(missingCurr,) === -1) {
            result += arr.join('\n')
        }
        else {
            arr.splice((arr.indexOf(missingCurr)), 1);
            result += arr.join('\n')
        }
    }
    return (result);
}



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function (curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
console.log(typeof (+'4'));




const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let result = 0;
    for (let i = 0; i < shoppingMallData.shops.length; i++) {
        result += shoppingMallData.shops[i].width * shoppingMallData.shops[i].length
        //console.log (shoppingMallData.shops[i]);
    }
    result = result * shoppingMallData.height * shoppingMallData.moneyPer1m3;
    if (result <= shoppingMallData.budget) {
        console.log("Бюджета достаточно");
    }
    else {
        console.log("Бюджета недостаточно");
    }
    console.log(result);
}
isBudgetEnough();


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
isBudgetEnough(shoppingMallData);


//Тоже задачка

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Whit'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let output = [];
    let kostil = [];
    let loosers = '';
    let count = 0;
    let count2 = count;
    if (arr.length % 3 == 1) {
        loosers += `Оставшиеся студенты: ${arr[arr.length - 1]}`;
    }
    else if (arr.length % 3 == 2) {
        loosers += `Оставшиеся студенты: ${arr[arr.length - 2]}, ${arr[arr.length - 1]}`;
    }
    for (let i = 0; i < arr.length / 3 - 1; i++) {
        for (let j = 0; j < 3; j++) {
            kostil.push(arr[count2]);///?????
            count2++;
        }
        output.push(kostil);
        kostil.splice(0, kostil.length);
        ///output.push((arr[count]) + (arr[count + 1]) + (arr[count + 2]));
        count += 3;
    }
    output.push(loosers);
    //console.log(arr);
    console.log(output);
    //console.log[(loosers)];
}
sortStudentsByGroups(students);