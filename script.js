/* Función que tome un arreglo de números y que devuelva el segundo más grande */

function secondBiggest ( data ) {
    return data.sort((a,b) => b - a)[1];
}

let numbers = [10, 143, 14, 105, 142, 160, 150];
let response = secondBiggest(numbers);
console.log("🚀 ~ file: script.js:9 ~ response:", response); // el segundo mas grande es 150
