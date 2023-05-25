/* для доступа к объекту в методе используется не имя переменной, 
например bookShelf, а ключевое слово this - контекст */

/* значением this будет объект перед «точкой», то есть объект,
который вызвал этот метод, в нашем случае это ссылка 
на объект bookShelf */

"use strict";

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

/* для того, чтобы получить доступ к свойствам объекта в методах, 
мы обращаемся к нему через this, а дальше как обычно - 
«через точку» к свойствам */

const myBookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

myBookShelf.addBook("The Mist");

console.log(myBookShelf.getBooks());

myBookShelf.removeBook("The Last Kingdom");

console.log(myBookShelf.getBooks());

myBookShelf.addBook("The Last Kingdom");

console.log(myBookShelf.getBooks());
