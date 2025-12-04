const { use } = require("react");

const user = {
    login: 'logan',
    region: 'ru',
    location: 'moscow'
}

console.log(toQueryString(use));

function toQueryString(){
    return Object.entries(params)
        .filter(([_, val]) => val !== undefined && val !== null)
        .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
        .join('&');
}