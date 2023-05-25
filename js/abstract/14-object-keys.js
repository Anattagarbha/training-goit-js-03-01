/* Object.keys(obj)принимает объект и возвращает 
массив ключей его собственных свойств */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

const keys = Object.keys(book);

console.log(keys);

/* скомбинировав результат Object.keys() и цикл for...of 
можно удобно перебрать собственные свойства объекта */

const myBook = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

const myBookKeys = Object.keys(myBook);

for (const key of myBookKeys) {
  console.log(key);
  console.log(myBook[key]);
}
