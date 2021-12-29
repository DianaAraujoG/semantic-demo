/* eslint-disable */
import React from "react";

const EjemFor = () =>{}
const numeros = Array(20000).fill(5);

console.time('for');
const resulFor = [];
for (let index = 0; index < numeros.length; index++) {
    resulFor.push(numeros[index]*5);
}
console.timeEnd('for');

console.time('forEach');
const resulForEach = numeros.forEach(x => x*5);
console.timeEnd('forEach');

console.time('map');
const resulMap = numeros.map(x => x*5);
console.timeEnd('map');

let n=0;
for (let i = 0; i < 9; i++) {
    n += i;
    console.log(n);
}

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

let numbers = [1, 5, 10, 15];
const doubles = numbers.map(function(x) {
   return x * 2;
});

const str = '12345';
const reverseNumber = [].map.call(str, function(x) {
  return x;
}).reverse().join('');
