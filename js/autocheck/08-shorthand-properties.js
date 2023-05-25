/* дополни код объявления объекта так, чтобы у него 
были свойства name, price, image и tags со значениями 
из переменных с аналогичными именами */

"use strict";

const prodName = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  prodName,
  price,
  image,
  tags,
};

console.log(product);
