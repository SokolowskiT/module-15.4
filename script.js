//Zadanie 1


const word1 = 'Hello';
const word2 = 'World';

const hello = (x1, x2) => console.log(`${x1} ${x2}`);

hello(word1, word2);


//Zadanie 2


const multiple = (x = 1, y = 1) => console.log(x * y);

multiple(7, 2);
multiple(10);


//Zadanie 3


const average = (...rest) => rest.reduce((total, amount, index, array) => {
	total += amount;
	if (index === array.length - 1) {
		console.log(total / array.length);
	} else {
		return total;
	}
});

average(1, 3, 6, 6);


//Zadanie 4


const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);


//Zadanie 5


const obj = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstname, , lastname] = obj;

const name = (firstN, lastN) => console.log(`${firstN} ${lastN}`);

name(firstname, lastname);