/* метод Object.entries(obj) возвращает массив записей, 
каждым элементом которого будет еще один массив из 2-х 
элементов: имени свойства и значения этого свойства 
из объекта obj */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

const entries = Object.entries(book);

console.log(entries);
