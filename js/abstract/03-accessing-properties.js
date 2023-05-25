/* синтаксис «через точку» используется в большинстве случаев 
и подходит тогда, когда мы заранее знаем имя (ключ) свойства, 
к которому хотим получить доступ */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = `The book title is ${book.title}`;
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = `The book genres are ${book.genres[0]}, ${book.genres[1]}`;
console.log(bookGenres); // ['historical prose', 'adventure']
