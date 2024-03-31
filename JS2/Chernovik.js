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


function calculateVolumeAndArea(a) {
	if (String(a).includes('.') || (typeof a === 'string') || (a <= 0)) {
		return ('При вычислении произошла ошибка');
	}
	else {
		return (`Объем куба: ${(a * a * a)}, площадь всей поверхности: ${6 * (a * a)}`);
	}
}


// Место для второй задачи
function getCoupeNumber(n) {
	let cup = 0;
	if (n === 0 || n > 36) {
		return ('Таких мест в вагоне не существует');
	}
	else if (n < 0 || String(n).includes('.') || (typeof n === 'string')) {
		return ("Ошибка. Проверьте правильность введенного номера места")
	}
	else {
		for (let i = 1; i <= n; i += 4) {
			cup++;
		}
		return (cup);
	}
}

// Место для первой задачи
function getTimeFromMinutes(x) {
	let h = Math.floor(x / 60), m = x % 60;
	let hh = 'час';
	let mm = 'мину';
	if (x < 0 || String(x).includes('.') || (typeof x === 'string')) {
		return ("Ошибка, проверьте данные");
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
	return (`Это ${h} ${hh} и ${m} ${mm}`);
}


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

