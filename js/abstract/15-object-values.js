/* метод Object.values(obj) возвращает массив 
значений собственных свойств объекта*/

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

const keys = Object.keys(book);
console.log(keys);

const values = Object.values(book);
console.log(values);

/* массив значений свойств также можно перебрать 
циклом for...of, например для получения общей 
суммы числовых значений */

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const items = Object.values(goods);

let sum = 0;

for (const item of items) {
  sum += item;
}

console.log(sum);
