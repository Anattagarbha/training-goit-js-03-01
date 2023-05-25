/* функция должна вернуть массив всех значений свойства 
с таким именем из каждого объекта в массиве products */

"use strict";

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let valuesArray = [];
  for (const product of products) {
    if (Object.keys(product).includes(propName)) {
      valuesArray.push(product[propName]);
    }
  }
  return valuesArray;
}
