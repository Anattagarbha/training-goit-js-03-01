/* значением вычисляемого свойства может 
быть любое валидное выражение */

"use strict";

const propName = "name";

const user = {
  age: 25,
  [propName]: "Генри Сибола",
};

console.log(user.name);
