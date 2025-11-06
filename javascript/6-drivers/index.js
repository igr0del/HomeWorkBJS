const hasLicence = confirm("Имеете лицензию?");
const age = Number(prompt("Ваш возраст?"));
const isDrunk = confirm("Вы пили сегодня алкоголь?");

alert(hasLicence && age >= 18 && !isDrunk ? "Вы можете водить машину." : "Вы не можете водить машину.");