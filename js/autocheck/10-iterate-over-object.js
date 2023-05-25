/* перебери объект apartment используя цикл for...in 
и запиши в массив keys все его ключи, а в массив values 
все значения его свойств */

"use strict";

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

let keys = [];
let values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys, values);
