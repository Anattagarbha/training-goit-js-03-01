/* перебери объект apartment используя 
метод Object.keys() и цикл for...of */

"use strict";

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(keys, values);
