const hasLicence = confirm("Имеете лицензию?");
const age = Number(prompt("Ваш возраст?"));
const isDrunk = confirm("Вы пили сегодня алкоголь?");

if (hasLicence && age >= 18 && !isDrunk) {
	alert("Вы можете водить машину.");
} 
else {
	alert("Вы не можете водить машину.");
}