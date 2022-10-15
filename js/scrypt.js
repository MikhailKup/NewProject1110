let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

if (personalMovieDB.count < 10) {
	console.log("Просмотрено слишком мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

// for (let i = 0; i < 2; i++) {
// 	const a = prompt("Один из последних просмотренных фильмов?");
// 	const b = prompt("На сколько оцените его?");
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 	} else {
// 		i--;
// 	}
// }

let i = 0;
while (i < 2) {
	const a = prompt("Один из последних просмотренных фильмов?");
	const b = prompt("На сколько оцените его?");
	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
	i++;
}


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
