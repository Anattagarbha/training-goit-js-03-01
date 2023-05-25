/* для доступа к вложенным свойствам используется цепочка обращейний «через точку» */

"use strict";

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const country = user.location.country;

console.log(country);

const firstHobby = user.hobbies[0];

console.log(firstHobby);
