/* присвой переменной apartment объект описывающий 
квартиру с заданными характеристиками */

"use strict";

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

for (const key in apartment) {
  if (apartment.hasOwnProperty(key)) {
    console.log(key);
    console.log(apartment[key]);
  }
}
