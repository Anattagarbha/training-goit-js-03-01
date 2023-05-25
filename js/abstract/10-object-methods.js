/* объекты могут хранить не только данные, но и функции 
для работы с этими данными - методы */

/* такие объекты можно назвать «моделями». Они связывают 
данные и методы для работы с этими данными */

"use strict";

const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  getBooks() {
    console.log("Этот метод вернёт все книги");
  },
  addBook(bookName) {
    console.log("Этот метод добавляет новую книгу");
  },
};

bookShelf.getBooks();
bookShelf.addBook();
