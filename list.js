/*Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.*/


function arrayFruits() {
    for (let i = 0; i <= fruits.length; i++) {
        console.log(fruits[i]);
    }
}
const fruits = ['mango', 'apple', 'grape', 'berry'];
arrayFruits(fruits);