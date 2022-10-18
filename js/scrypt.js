
// Первая консольная команда
// ***======================================================================

let numberOfFilms;

function start() {
	numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?");

	while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
		numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?");
	}
}
start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?");
		const b = prompt("На сколько оцените его?");
		if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			i--;
		}
	}
}
// rememberMyFilms();

function detectLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено слишком мало фильмов!");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
// detectLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}
// showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const a = prompt(`Ваш любимый жанр под номером ${i}`);
		if (a != null && a != '' && a.length < 50) {
			personalMovieDB.genres[i - 1] = a;
		} else {
			i--;
		}
	}
}
writeYourGenres();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}
showMyDB();







// Обьекты
//***======================================================================


// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	adress: {
// 		city: "Perm",
// 		street: "Sherbakova",
// 	}
// };

// if ("name" in userInfo) {
// 	console.log(userInfo.name);
// }

// ---------------------------------------------------

// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	adress: {
// 		city: "Perm",
// 		street: "Sherbakova",
// 	}
// };

// for (const key in userInfo.adress) {
// 	console.log(key);
// 	console.log(userInfo.adress[key]);
// }

// ---------------------------------------------------

// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	adress: {
// 		city: "Perm",
// 		street: "Sherbakova",
// 	},
// 	showInfo() {
// 		console.log(`${this.name}, ${this.age} лет`);
// 	},
// };

// userInfo.showInfo();

// ---------------------------------------------------
// Функция-конструктор Обьектов

// function UserInfo(name) {
// 	this.name = name;
// 	this.age = 30;
// }

// console.log(new UserInfo('Вася'));

// ---------------------------------------------------

// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// };
// delete userInfo.name;

// console.log(userInfo);


// Функции
//***======================================================================

// function showFirstMessage() {
// 	console.log('Hello World');
// }
// showFirstMessage();

// function calc(a, b) {
// 	return a + b;
// }

// console.log(calc(2, 3));

// function ret() {
// 	let num = 50;
// 	return num;
// }


// const usdCurr = 30;
// const discount = 0.5;
// const convert = (amount, curr) => {
// 	return curr * amount;
// };

// const promotion = (result) => {
// 	console.log(result * discount);
// };

// promotion(convert(500, usdCurr));

// function doNothing() {
// };

// console.log(doNothing() === undefined);


// function getMathResult(num, count) {
// 	let result = ``;
// 	if (count === NaN || count <= 0 || typeof (count) === 'string') {
// 		console.log(num);
// 	} else {
// 		for (let i = 1; i <= count; i++) {
// 			let numCount = num * i;
// 			if (i >= 2) {
// 				numCount = `---${num * i}`;
// 			}
// 			result = `${result}${numCount}`;
// 		}
// 	}
// 	console.log(result);
// }

// getMathResult(5, 4);



// Методы и свойства строк и чисел
//***======================================================================

// const logg = 12.2;
// console.log(Math.round(logg));


// const test = '12.2px';
// // console.log(parseInt(test));
// console.log(parseFloat(test));

// Округление в меньшее число
// const number = Math.floor(5.2);

// Округление в большее число
// const number = Math.ceil(5.2);

// Округление до ближайшего целого
// const number = Math.round(5.2);


// ---------------------------------------------------
// Как получить число с десятителем?
// const number = Math.round(5.845 * 10) / 10;  == 5.85

// Или
// const number = 5.845;
// console.log(number.toFixed(1));

// ---------------------------------------------------
// Как получить число без единицы измерения?

// Функция parseInt возвращает целое число
// let value = '12.2px';
// console.log(parseInt(value));   === 12

// Функция parseFloat возвращает число с точкой
// let value = '12.28px';
// console.log(parseFloat(value));   === 12.28

// ---------------------------------------------------
// Методы строк


// Метод поиска нумерации символа в строке
// let text = "Привет";
// console.log(text.indexOf('р'));   === 1

// Метод проверки - есть ли элемент в строке
// let text = "Привет";
// console.log(text.includes('р'));   === true

// Метод проверки - начинается ли строка с символов
// let text = "Привет";
// console.log(text.startsWith('Пр'));  === true

// Метод проверки - заканчивается ли строка с символов
// let text = "Привет";
// console.log(text.endsWith('ет'));   === true

// Метод получения части строки
// let text = "Привет";
// console.log(text.slice(0, 2));  === Пр
