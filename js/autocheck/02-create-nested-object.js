/* дополни объект квартиры свойством owner, значением 
которого будет объект с информацией о владельце */

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const apartmentKeys = Object.keys(apartment);

for (const key of apartmentKeys) {
  console.log(key);
  console.log(apartment[key]);
}
