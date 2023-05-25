/* дополни код объявления объекта credentials так, 
чтобы в результате у него были два свойства: email 
и password, имена которых хранятся в переменных 
emailInputName и passwordInputName */

"use strict";

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

console.log(credentials);
