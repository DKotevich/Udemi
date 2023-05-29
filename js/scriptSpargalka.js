/* eslint-disable indent */
'use strict';
//console.log(1);
let number = 5; //let меняется
const leftBorderWidth = 1;//НЕ МЕНЯЕТСЯ
number = 10;
console.log(number);
console.log(leftBorderWidth);
//SHRIFTY:
//snake_case
//UPPER_SNAKE_CASE
//Kebab-case
//PascalCase
console.log(4 / 0);
//tipy dannyh
//boolevie
let bool = false;
console.log(bool);
//Nan - netu ego
//undefined
let und;
console.log(und);

//obiekty

const obje = {
	name: 'John',
	age: 25,
	isMarried: false
};
//console.log (obj.age);
console.log(obje['age']);

//massivy
let array = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}];
console.log(array[2]);

//Lection 11
console.log(-4 / 0);		//chislo
const persone = 'Alex';		// stroka
console.log(persone);
let undef;					//pustaya peremennaya = undefined
console.log(undef);
//objecty !!!
const object = {
	name: 'lohn',
	age: 25,
	isMarried: false
};
console.log(object.age);
console.log(object['isMarried']);

//massivy
let arra = ['plum.png', 'orange', 6, {}, []];
console.log(arra[2]);

//urok 12
const arr = [0, 1, 2, 3, 4, 5]; //massivy
console.log(arr[2]);

//const obj = {a:1, b:2}; //objecty
const obj = {
	'Anna': 500,
	'Elise': 800,
	abc: {
		def: {                //vlozhennye konstrykcii (objecty)
			array: ['r', '6']
		}
	}
};
console.log(obj.Elise);
console.log(obj['Elise']);
console.log(obj.abc.def.array); //vyvod vloshennyh construkciy

obj.b = '123456';   //sozdaen v objecte novoe svoistvo
console.log(obj['b']);  //vivodim novoe svoistvo

//Urok13
/*
alert('Hello');									// Okno brauzera s soobsheniem!!!

const result = confirm('Are you hire??'); //Okno s voprosom DA ili NET?
console.log(result);

const answer = prompt('Vam est 18 let?', '18'); // okno vvoda. 1-e lapki eto sam vopros, 2-e eto defoltniy otvet; tip vivoda TOLKO STROKA!!!! ///chtob poluchit chislo stavim +
console.log(answer);
												//naprimer
const answer1 = +prompt('Skolko Vam let?', '72');
console.log(answer1 + 5);
												//Sozdat massiv iz oprosnika
const answers = [];
answers[0] = prompt('Kak Vas zvat?', 'Ivan');
answers[1] = prompt('Kak Vasha familiya?', 'Mazepa');
answers[2] = prompt('Skolko Vam let?', '24');
												//i srazu vivod na stranicu
document.write(answers);
console.log(typeof (answers));
*/
/*
												//urok 14 //interpolyaciya ``
const category = 'toys';
//console.log('https://someurl.com' + category);
console.log (`https://someurl.com/${category}/5`); //tut Конкатенация
*/
const user = 'Ivan';

alert(`Hello, ${user}`);

//Urok 15

//OPERATORY
console.log('arr' + ' - object');
console.log('4' + ' - object');
console.log(4 + +'5');						//perevod stroki v chislovoi format

// inkriment i decriment
let incr = 10, decr = 5;
incr++;										//postfiksnaya rasstanovka inkrimenta
decr--;
console.log(incr, decr);

let incr1 = 10, decr1 = 5;
console.log(++incr1, ++decr1);				//prefiksnaya rasstanovka inkrimenta

console.log(5 % 2);							//ostatok ot deleniya

console.log(2 * 4 == 8);					// Sravnivanie

console.log(2 * 4 === '8');					// strogoe sravnenie chisls]a s chislom
/*
&&

||
*/
const isChecked = true, isClose = true;

console.log(isChecked && isClose); // i


const isChecked1 = true, isClose1 = true;

console.log(isChecked1 || isClose1); // i
// Urok 16
//git init //iniciacyya papki kotoruyu nuzhno otslrzhivat
//git config --local user.name "Dima"
//git config --local user.email "kondratevichdima@gmail.com"
//git status
//git add -A
//git commit -a -m"3commit"
//git log
//git push -u origin main 



//Urok 17  //rabota s GIT na 2x komputerah

// admin@MacBook-Air-Admin Udemy %  cd ..  // viyty is papki
// admin@MacBook-Air-Admin Udemy %  cd work  // zaity v kakuyuto rabochuu papku
//admin@MacBook-Air-Admin Udemy %git clone https://github.com/DKotevich/Udemi.git project 2 //kloniruyu papku s gita na rabochiy komp v papku project 2
//
// admin@MacBook-Air-Admin Udemy % git pull  //ctob poluchit svezhuu versiu failov nuzhno na novom compe vipolnit git pull
// merge eto sliyanie dvuh versiy
//
//git ignore faily kotorie ne pushatsa
//
//Urok 18
//ssl sertifikat (httpS) - fail na servere 
//FTP file tranfer protocol
//SSH - protokol dlya upravleniya operacionnimy sistemami i peredachi faiov, ispolzuet kluchi
//
//urok 19
/*
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genders: [],
	privat: false
};
personalMovieDB.movies.a =  prompt('Один из последних просмотренных фильмов', '');
personalMovieDB.movies.b = prompt('На сколько оцените его?', '');
 

console.log(personalMovieDB);*/

// urok 20 usloviya
// eslint-disable-next-line no-constant-condition
if (4 == 9) {
	console.log('ok');
}
else {
	console.log('Error');
}

// vlozhennie usloviya
const num = 50;
if (num < 49) {
	console.log('error');
} else if (num > 100) {
	console.log('Mnogo');
} else {
	console.log('Ok');
}
const numb = 50;
//ternarniy operator
(numb === 50) ? console.log('ok') : console.log('Error');
//uslovie//T/O///v sluchae true////inache esli false

//konstrukciya swich (modifikaciya IF na neskolko usloviy)
const num2 = '50';
switch (num2) {
	case '40':								//znachenie kotoroe nuzhno proverit (tolko strogoe ecli (ne >, ne <))
		console.log('Neverno');
		break;										//Obyazatelno esli ostanovka tut
	case '100':
		console.log('Neverno');
		break;
	case ('50'):
		console.log('V tochku');
		break;
	default:
		console.log('Ne v etot raz');
		break;
}
//urok 21     logicheskie operatory
const hamburger = true;
const fries = true;
if (hamburger && fries) {
	console.log('i am syt');
}


if ((hamburger && fries))						// poluchenie boolevih znacheniy YTUE or FALSE
{
	console.log("ya syt");
}
console.log((hamburger && fries));


0;; NaN; undefined = FALSE!!!

const hamburger = 2;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola === 1 && fries);

if (hamburger === 3 && cola === 1 && fries) {
	console.log('Vse syty');
}
else { console.log('Uhodim'); }

console.log(1 && 0);									// budet nol (perviy nepravdiviy (FALSE))
console.log(1 && 5);									// poluchaem true (no vozvrashaem prosto poslednee znachenie)
console.log(null && 5);									// I vozvrashaet pervuu nepravdu


const hamburger = 3;
const fries = 3;
const cola = 0;
const naggets = 2;
if (hamburger === 3 && cola === 2 || fries === 3 && naggets) {							// ILI vozvrashaet pervoe lzhivoe znachenie
	console.log('Vse dovolny');
}
else {
	console.log("Mi uhodim");
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && naggets);					//vernet cifru 2 tak kak operator ili vozvrashaet pervuy pravdu!!!


let johnReport, alexReport, samReport, mariaReport = "done";
console.log(johnReport || alexReport || samReport || mariaReport);
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);
console.log(!3);

// Urok 22 - Cikly

// cikl nomer 1
let num = 50;
while (num <= 55) {
	console.log(num);
	num++;
}

//cikl nomer 2
let num = 50;
do {
	console.log(num);
	num++;
}
while (num <= 55);

//Cikl nomer 3
for (let i = 1; i < 8; i++) {
	console.log(i);
}


let num = 50;
for (let i = 1; i < 8; i++) {
	console.log(num);
	num++;
}

for (let i = 1; i < 10; i++) {
	if (i == 6) {
		break;											//BREAK ostanavlivaet cikl
	}
	console.log(i);
}

for (let i = 1; i < 10; i++) {
	if (i == 6) {
		continue;									//Continue propuskaet 1 cikl
	}
	console.log(i);
}

//Urok 23 cikl v cikle i metki

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}
// PEREHOD po METKE

first: for (let i = 0; i < 3; i++) {				// METKA ITERACII
	console.log(`FirstLevel: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`SekondLevel: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;						//tretiy uroven ne doidet do 2
			console.log(`ThirdLevel: ${k}`);
		}
	}
}

// Место для первой задачи
function firstTask() {
	for (let i = 5; i <= 10; i++) {
		console.log(i);
	}
}
firstTask();

// Место для второй задачи
function secondTask() {
	for (let i = 20; i >= 10; i--) {

		if (i == 13) {
			break;
		}
		console.log(i);
	}
}
secondTask();

// Место для третьей задачи
function thirdTask() {
	for (let i = 2; i <= 10; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}
thirdTask();

// Место для четвертой задачи
function fourthTask() {
	let i = 2;
	while (i < 16) {
		i++;
		if (i % 2 === 0) {
			continue;
		} else {
			console.log(i);
		}
	}
}
fourthTask();

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];
	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers[i - 5] = i;
	}
	// Не трогаем
	return arrayOfNumbers;
}
fifthTask();


function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	for (let i = 0; i < (arr.length); i++) {
		result[i] = (arr[i]);
		console.log(result[i]);
	}
	// Не трогаем
	return result;
}
firstTask();

// Место для второй задачи
function secondTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	// Пишем решение вот тут
	for (let i = 0; i < (data.length); i++) {
		if (typeof data[i] === 'number') {
			data[i] = +(data[i] * 2);
		}
		else {
			data[i] = (data[i] + (' - done'));
		}
	}
	console.log(data);
	// Не трогаем
	//return data;
}
secondTask();



// Место для третьей задачи
function thirdTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];
	let x = 0;
	// Пишем решение вот тут
	for (let i = data.length - 1; i >= 0; i--) {
		result[x] = data[i];
		x++;
	}
	console.log(result);
	//Не трогаемx
	//return result;
}
thirdTask();

/*
*
**
***
****
*****
******
*/
let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';
	}
	result += "\n"
}
console.log(result);


//Urok 24 PRAKTIKA
/* eslint-disable indent */
/* eslint-disable quotes */

"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uzhe prosmotreli?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt("Odin iz poslednih prosmotrennih filmov?", ""),
		b = prompt("Na skolko vi ocenite ego?", "");
	if (a != null && (b != null) & (a != "") && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
	}
	else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count <= 10) {
	console.log('Prosmotreno malofilmov');
}
else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
	console.log('Vi klassicheskiy zritel');
} else if (personalMovieDB.count >= 30) {
	console.log('vi kinoman');
}
else {
	console.log('Error!');
}


console.log(personalMovieDB);

//lesson 25   FUNKTION

function showFirstMassege()							//nachinaem s show, get... v duzhkah (ARGUMENTY)
{
	console.log("Hello World!");
}
showFirstMassege();


/*
function showFirstMassege (text)
{
console.log(text);
let num = 20;						// LET   i  CONST sushestvuyt tolko v nuti funkcii OSHIBKA
}
showFirstMassege("Hello World!");
console.log(num);
*/

let num3 = 20;
function showFirstMassege(text) {
	console.log(text);
	let num3 = 10;
	console.log(num);
}
showFirstMassege("Hello World!");
console.log(num3);



//Funkciya function declaration rabotaet do togo kak ina bila vizvana



function calc(a, b) {
	return (a + b)								// RETURN PREKRASHAET DEIStvie funkcii!!!!
	console.log('UNRISHIBLE CODE')				//NE RABOAET!!!
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);


console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
	return (a + b)									// RETURN PREKRASHAET DEIStvie funkcii!!!!
	console.log('UNRISHIBLE CODE')				//NE RABOAET!!!
}


//function expration (cherez peremennuyu) otlichie v tom chto ona vizivaetsa tolko kogda do nee dohodit potok koda
const logger = function () {
	console.log('Hello')
};
logger();


// strelochnie funkcii ( STANDART es6) ne imeet vizova!!!
const calc = (a, b) => a + b;
//peremen  funkciya  
const calc = (a, b) => { return a + b };
//lection 26 funkcii

//universalnaya funkciya peremennaya usdCurr vizivaetsa v konce i vstavlyaetsa vmeste s 500 v argumanty funkcii
const usdCurr = 28
const usdEuro = 32

function convert(amount, curr) {
	console.log(curr + amount);

}
convert(500, usdCurr);						//znachenie i podstavlyanie  curr
convert(500, usdEuro);

// lesson 27    vasznost RETURN

const usdCurr2 = 28;
const diskount = 0.9;

function convert(amount, curr) {
	return curr + amount;					//vozvrashaet v funkciu promotion svoy resultat i srazu prekrashaet svoy rabotu
}

function promotion(result) {
	console.log(result * discount);
}
promotion(convert(500, usdCurr2));

function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return					//funkciya polnostu !!! prekratila rabotu !!!
	}
	console.log('done')
}
test();
// lection 28 metody i svoistva strok i chisel
//metody vipolnyaut kakoto deistvie nad chem to 
const str = 'teSt';
const arr = [1, 2, 6]
console.log(str.length, arr.length);			//svoistvo .length 
console.log(str[2]);							//metod
console.log(str.toUpperCase());
console.log(str.toLowerCase());


let fruit = "Some fruit";
console.log(fruit.indexOf('fru'));			//poisk v stroke i prosto vozvrashaet

const logg = 'Hello world';
console.log(logg.slice(6, 11));			//metod iz 2h argumentov 1 s kakoi posicii i 2 po kakuu posiciu virezat (ne vkluchitelno) ili esli - to s konca
console.log(logg.substring(6, 11));		//raznica v tom chto  perviy mozhet bit bolshe vtorogo i e prinimaet otricatelnie -
console.log(logg.substring(6, 11));		//raznica v tom chto  perviy mozhet bit bolshe vtorogo i e prinimaet otricatelnie -
console.log(logg.substr(6, 2));			//to zhe samoe no vtoroi argument eto kolichestvo simviliv dlya vozvrata

//chisla!!!!   biblioteka Math. vstroeno dazhe v brauzer
const num = 12.2
console.log(Math.round(num));

const test = '12.22px'
console.log(parseInt(test));		//nahodit chislo i vozvrashaet celoe chislo
console.log(parseFloat(test));		//Vozvrashaet chislo v desatichnom formate i s plavaushey zapyatoi


//Urok 29 PRAKTIKA FUNKCII!!!
/*
"use strict";

let numberOfFilms;
function start() {
	numberOfFilms = +prompt("Skolko filmov vi uzhe prosmotreli?", "");
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Skolko filmov vi uzhe prosmotreli?", "");

	}
}
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Odin iz poslednih prosmotrennih filmov?", ""),
			b = prompt("Na skolko vi ocenite ego?", "");
		if (a != null && (b != null) & (a != "") && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
		}
		else {
			console.log('error');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		console.log('Prosmotreno malofilmov');
	}
	else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
		console.log('Vi klassicheskiy zritel');
	} else if (personalMovieDB.count >= 30) {
		console.log('vi kinoman');
	}
	else {
		console.log('Error!');
	}
}

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

//ILI:

//detectPersonalLevel();
//function showMyDB(hidden) {
//    if (!hidden) {
//       console.log(personalMovieDB);
//   }
//}
//showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Vash lubimyy zhanr pod nomerom ${i}`);
	}
}
writeYourGenres();
*/
//Lesson 30



// Место для первой задачи
function sayHello(text) {
	return ("Привет, " + text + "!");
}



// Место для второй задачи
function returnNeighboringNumbers(someSheet) {
	let arr = [];
	arr[0] = (+(someSheet) - 1);
	arr[1] = (+(someSheet));
	arr[2] = (+(someSheet) + 1)
	return (arr);
}


// Место для третьей задачи
function getMathResult(firstSheet, secondSheet) {
	let result = '' + firstSheet;
	let KOSTIL = firstSheet;

	if (typeof (secondSheet) !== 'number' || secondSheet <= 0) {
		return firstSheet;
	}

	for (let i = 1; i < secondSheet; i++) {
		KOSTIL += firstSheet;
		result = result + '---' + KOSTIL;
	}
	return result;
}
getMathResult(10, -5);




// Место для первой задачи
function calculateVolumeAndArea() {

}

// lection 29 praktic
//  obem kuba V = a3       ploshad kuba S = 6a2
// Место для первой задачи // (`Hello, ${user}`);  'Объем куба: 125, площадь всей поверхности: 150'
function calculateVolumeAndArea(a) {
	if (String(a).includes('.') || (typeof a === 'string') || (a <= 0)) {
		console.log('При вычислении произошла ошибка');
	}
	else {
		console.log(`Объем куба: ${(a * a * a)}, площадь всей поверхности: ${6 * (a * a)}`);
	}
}
calculateVolumeAndArea(-5);


// Место для второй задачи
function getCoupeNumber(n) {
	let cup = 0;
	if (n === 0 || n > 36) {
		console.log('Таких мест в вагоне не существует');
	}
	else if (n < 0 || String(n).includes('.') || (typeof n === 'string')) {
		console.log("Ошибка. Проверьте правильность введенного номера места")
	}
	else {
		for (let i = 1; i <= n; i += 4) {
			cup++;
		}
		console.log(cup);
	}
}

getCoupeNumber(7.7);

/*
1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число,
дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/

// Место для первой задачи
function getTimeFromMinutes(x) {
	let h = Math.floor(x / 60), m = x % 60;
	let hh = 'час';
	let mm = 'мину';
	if (x < 0 || String(x).includes('.') || (typeof x === 'string')) {
		console.log("Ошибка, проверьте данные");
		return;
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
getTimeFromMinutes(5.2);

/*2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0*/
// Место для второй задачи

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

/*Задача:
Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку,
в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
Пример:
fib(4) => ''0 1 1 2"
fib(7) => ''0 1 1 2 3 5 8"
fib('7') => ''"
fib(1) => "0"
fib(0) => ''"*/

function fib(x) {
	let res = '0 1', a = 0, b = 1, c = 0;
	if (x == 1) {
		console.log("0");
	}
	else if (x == 0 || String(x).includes('.') || typeof x !== 'number') {
		console.log("");
	}
	else {
		for (let i = 0; i < x - 2; i++) {
			c = a + b;
			a = b;
			b = c;
			res = res.concat(' ' + c);
		}
		console.log(res);
	}
}
fib(7.7);

//lesson 30 metod dlya strok TRiM
const a = prompt("Odin iz poslednih prosmotrennih filmov?", "").trim(),

//lesson 31 CALLBACK

function first() {
	setTimeout(function () {
		console.log(1);
	}, 500);
}
function second() {
	console.log(2);
}
first();
second();

function learnJS(lang, callback) {
	console.log(`Ya uchu: ${lang}`);
	callback();
}
function done() {
	console.log('ya proshel etot urok');
}
learnJS('JavaSkript', done);
//done peredaetsa vmesto callbacka i srabativaet tolko posle togo kak budet vizvana vnutri v kallbacke


//lesson 32 metody obrktov
//const obj = new Object();
const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: "red"
	},
	makeTest: function () {//metody
		console.log('Test');
	}
};
options.makeTest();

console.log(options['colors']['border']);
//delete options.name;
console.log(options);

for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Svoistvo ${i} imeet znachenie: ${options[key][i]}`);
		}
	}
	else {
		console.log(`Svoistvo ${key} imeet znachenie: ${options[key]}`);
	}
}// Key eto nazvaniya kluchey
console.log(Object.keys(options).length);
console.log(Object.keys(options).length);
//destrukturizaciya
const { border, bg } = options.colors;
console.log(border);
//lesson 33 massivy i psevdomassivy