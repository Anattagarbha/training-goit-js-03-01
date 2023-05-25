/* при переборе циклом for...in необходимо на каждой 
итерации добавить проверку на собственное свойство */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const prop in book) {
  if (book.hasOwnProperty(prop)) {
    console.log(prop);
    console.log(book[prop]);
  }
}
