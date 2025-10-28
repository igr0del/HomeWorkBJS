let addressLat = 10;
let addressLong = 15;
let positionLat = 0;
let positionLong = 0;

let lat = addressLat - positionLat;
let long = addressLong - positionLong;

let way = Math.sqrt(Math.pow(lat, 2) + Math.pow(long, 2));

console.log(way);

