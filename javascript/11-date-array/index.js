const input = prompt("Enter dates separated by commas (e.g., 12-05-2020,31/12/2021):");

const dateArray = input.split(',').map(date => date.trim());

const validDates = filterValidDates(dateArray);

const formattedDates = validDates
	.map(convertToRightFormat)
	.filter(Boolean);

console.log(formattedDates);

function parseDate(dateString) {
	const regex = /^(\d{2})([./\-\\_])(\d{2})\2(\d{4})$/;
 	const match = str.match(regex);
  	if (!match) return null;

	const [_, dayStr, sep, monthStr, yearStr] = match;
  	return {
		day: Number(dayStr),
		month: Number(monthStr),
		year: Number(yearStr),
		sep
 	};
}

function convertToRightFormat(dateString){
	const data = parseDate(dateString);
  	if (!data) return null;

	const [_, day, sep, month, year] = match;

  	return `${day}-${month}-${year}`;
}

function filterValidDates(dateArray){
	return dateArray.filter(isValidDate);
}

function isValidDate(input){
	const data = parseDate(input);
  	if (!data) return false;

	const [_, dayStr, sep, monthStr, yearStr] = match;

	const day = Number(dayStr);
  	const month = Number(monthStr);
  	const year = Number(yearStr);

	if (month < 1 || month > 12 || day < 1 || day > 31) return false;

	const date = new Date(`${year}-${month}-${day}`);

	return (
		date.getFullYear() == year &&
		date.getMonth() + 1 == month &&
		date.getDate() == day	
	);
}
