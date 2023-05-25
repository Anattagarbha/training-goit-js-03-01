/* в отличии от массива или строки, объект это неитерируемая 
сущность, то есть его нельзя перебрать циклами for или for...of */

/* для перебора объектов используется специальный цикл 
for...in, который перебирает ключи объекта object */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const prop in book) {
  console.log(prop);
  console.log(book[prop]);
}
