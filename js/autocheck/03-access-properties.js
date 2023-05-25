/* дополни код, присвоив объявленным переменным выражения 
обращения к соответствующим свойствам обьекта apartment */

"use strict";

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

console.log(aptRating, aptDescr, aptPrice, aptTags);
