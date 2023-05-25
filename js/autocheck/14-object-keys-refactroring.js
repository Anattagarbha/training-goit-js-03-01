/* выполни рефакторинг функции countProps(object), 
используя метод Object.keys() и, возможно, но 
необязательно, цикл for...of */

"use strict";

function countProps(object) {
  const propCount = Object.keys(object).length;
  return propCount;
}
