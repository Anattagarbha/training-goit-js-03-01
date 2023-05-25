/* второй способ получить доступ к свойству 
объекта это синтаксис обьект["имя свойства"] */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];

console.log(bookTitle);

const bookGenres = book["genres"];

console.log(bookGenres);
