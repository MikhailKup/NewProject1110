
// Первая консольная команда
// ***======================================================================

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		this.count = prompt("Сколько фильмов вы уже просмотрели?").trim();
		while (this.count == null || this.count == '' || isNaN(this.count)) {
			this.count = prompt("Сколько фильмов вы уже просмотрели?").trim();
		}
	},
	showMyDB: function () {
		if (this.privat == false) {
			console.log(this);
		}
	},
	toogleVisibleMyDB: function () {
		if (this.privat == true) {
			this.privat == false;
		} else {
			this.privat == true;
		}
	},
	detectLevel: function () {
		if (this.count < 10) {
			console.log("Просмотрено слишком мало фильмов!");
		} else if (this.count >= 10 && this.count <= 30) {
			console.log("Вы классический зритель");
		} else if (this.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?").trim();
			const b = prompt("На сколько оцените его?").trim();
			if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
				this.movies[a] = b;
			} else {
				i--;
			}
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			const a = prompt(`Ваш любимый жанр под номером ${i}`).trim();
			if (a != null && a != '' && a.length < 50) {
				this.genres[i - 1] = a;
			} else {
				i--;
			}
		}
		this.genres.forEach(function (item, i) {
			console.log(`Любимый жанр № ${i + 1} - это ${item}`);
		});
	}
};
personalMovieDB.showMyDB();
personalMovieDB.toogleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectLevel();
personalMovieDB.writeYourGenres();




// ---------------------------------------------------
// Решение задачи - числа Фибоначчи

// function fib(num) {
// 	if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
// 		return "";
// 	}

// 	let result = '';
// 	let first = 0;
// 	let second = 1;

// 	for (let i = 0; i < num; i++) {
// 		if (i + 1 === num) {
// 			result += `${first}`;
// 			// Без пробела в конце
// 		} else {
// 			result += `${first} `;
// 		}

// 		let third = first + second;
// 		first = second;
// 		second = third;
// 	}

// 	return result;
// }
// fib(4);



//***======================================================================
