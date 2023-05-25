/* синтаксис коротких свойств (shorthand properties) 
позволяет использовать имя переменной как имя свойства, 
а её значение как значение свойства */

"use strict";

const userName = "Генри Сибола";
const age = 25;

const user = {
  userName,
  age,
};

console.log(user.userName);
console.log(user);
