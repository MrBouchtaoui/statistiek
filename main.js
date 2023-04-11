console.log("main.js loaded 🎉");

//  Opdr. 1

// const numbers = [15, 14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
// 	const number = numbers[i];
// 	sum += number;
// }

// sum = sum / numbers.length;
// console.log("The sum is: ", Math.floor(sum));

// Opdr 2
// const numbers = [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
// 	const number = numbers[i];
// 	sum += number;
// }

// let average = sum / numbers.length;
// console.log("Average is: ", Math.ceil(average));

// Opdr. 3
// const myNumbers = [15,14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35];

// let highestNumber = 0;

// for (let i = 0; i < myNumbers.length; i++) {
//     const number = myNumbers[i];
//     if(number > highestNumber){
//         highestNumber = number;
//     }
// }
// console.log(highestNumber);

// Opdr. 4

// const myNumbers = [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315];

// let lowestNumber = 10000;

// for (let i = 0; i < myNumbers.length; i++) {
// 	const number = myNumbers[i];
// 	if (number < lowestNumber) {
// 		lowestNumber = number;
// 	}
// }
// console.log(lowestNumber);

//Opdr. 5

// const under30 = [15,14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35];

// for (let i = 0; i < under30.length; i++) {
//     const number = under30[i];
//     if (number < 30) {
//         console.log(number);
//     }
// }

//Opdr. 6

const numbers = [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315];

for (let index = 0; index < numbers.length; index++) {
	const number = numbers[index];
	if (number > 200) {
		console.log(number);
	}
}
