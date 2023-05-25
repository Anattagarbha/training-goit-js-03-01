/* в стандартный набор повседневных задач разработчика входит 
манипуляция массивом однотипных объектов. Это значит что все 
объекты в массиве гарантированно будут иметь одинаковый 
набор свойств, но с разными значениями */

"use strict";

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];

/* для перебора такого массива используется 
стандартный цикл for...of  */

for (const book of books) {
  console.log(book);
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

/* получим список названий всех книг в коллекции books */

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames);

/* узнаем средний рейтинг всей нашей коллекции */

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating);
