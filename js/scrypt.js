let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?");
const b = prompt("На сколько оцените его?");
const c = prompt("Один из последних просмотренных фильмов?");
const d = prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);








// ---------------------------------------------------


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
