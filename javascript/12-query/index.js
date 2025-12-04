const { use } = require("react");

const user = {
    login: 'logan',
    region: 'ru',
    location: 'moscow'
}

//Первый вариант
const queryString_ver1 = new URLSearchParams(user).toString();

console.log(queryString_ver1);

//Второй вариант
const queryString_ver2 = Object.entries(user)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

console.log(queryString_ver2);