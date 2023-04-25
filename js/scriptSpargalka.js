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
console.log(-4 / 0);  //chislo
const persone = 'Alex'; // stroka
console.log(persone);
let undef; //pustaya peremennaya = undefined
console.log(undef);
// objecty !!!
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
alert('Hello'); // Okno brauzera s soobsheniem!!!

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
console.log (`https://someurl.com/${category}/5`); //tut interpolyaciya
*/
const user = 'Ivan';

alert(`Hello, ${user}`);

//Urok 15

//OPERATORY
console.log('arr' + ' - object');
console.log('4' + ' - object');
console.log(4 + +'5');//    perevod stroki v chislovoi format

// inkriment i decriment
let incr = 10, decr = 5;
incr++; //postfiksnaya rasstanovka inkrimenta
decr--;
console.log(incr, decr);

let incr1 = 10, decr1 = 5;
console.log(++incr1, ++decr1);  //prefiksnaya rasstanovka inkrimenta

console.log(5 % 2);   //ostatok ot deleniya

console.log(2 * 4 == 8);  // Sravnivanie

console.log(2 * 4 === '8');   // strogoe sravnenie chisls]a s chislom
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
//
//
//
//token: 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


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