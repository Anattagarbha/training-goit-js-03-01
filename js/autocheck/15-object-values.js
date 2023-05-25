/* запиши в переменную keys массив ключей собственных 
свойств объекта apartment, а в переменную values массив 
всех значений его свойств */

"use strict";

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys, values);
