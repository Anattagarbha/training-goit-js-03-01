/* напиши функцию countProps(object), которая считает 
и возвращает количество собственных свойств объекта 
в параметре object */

"use strict";

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}
