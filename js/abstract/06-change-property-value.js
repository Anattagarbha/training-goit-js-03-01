/* после того как объект создан, значение его свойств 
можно изменить. Для этого необходимо обратиться к ним по имени, 
например «через точку», и присвоить новое значение */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating, book.isPublic, book.genres);
console.log(book);
