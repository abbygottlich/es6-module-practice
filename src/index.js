import add from "./modules/add.js";
import subtract from "./modules/subtract.js";
import multiply from "./modules/multiply.js";
import divide from "./modules/divide.js";
import { addTen, addFive, addOne } from "./modules/addNumbers.js";
import { subtractOne, subtractFive, subtractTen } from "./modules/subtractNumbers.js";
import { multiplyOne, multiplyFive, multiplyTen } from "./modules/multiplyNumbers.js";
import { divideOne, divideFive, divideTen } from "./modules/divideNumbers.js";

const number1 = 393;
const number2 = 238;

let answer = add(number1, number2);
console.log(answer);

answer = subtract(number1, number2);
console.log(answer);

answer = multiply(number1, number2);
console.log(answer);

answer = divide(number1, number2);
console.log(answer);

answer = addTen(number1);
console.log(answer);

answer = addFive(number1);
console.log(answer);

answer = addOne(number1);
console.log(answer);

answer = subtractOne(number1);
console.log(answer);

answer = subtractFive(number1);
console.log(answer);

answer = subtractTen(number1);
console.log(answer);

answer = multiplyOne(number1);
console.log(answer);

answer = multiplyFive(number1);
console.log(answer);

answer = multiplyTen(number1);
console.log(answer);

answer = divideOne(number1);
console.log(answer);

answer = divideFive(number1);
console.log(answer);

answer = divideTen(number1);
console.log(answer);
