'use strict';
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
let incr = 10,
    decr = 5;
incr++; //postfiksnaya rasstanovka inkrimenta
decr--;
console.log(incr, decr);

let incr = 10,
    decr = 5;
console.log(++incr, ++decr);  //prefiksnaya rasstanovka inkrimenta

console.log(5%2);   //ostatok ot deleniya

console log (2*4 == 8);  // Sravnivanie

console.log (2*4 === '8');   // strogoe sravnenie chisls]a s chislom
/*
&&

||
*/
const isChecked = true,
isClose = true;

console.log (isChecked && isClose); // i


const isChecked = true,
isClose = true;

console.log (isChecked || isClose); // i
// Urok 16