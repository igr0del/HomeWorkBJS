const input = prompt('Введите номер карты');

if (luhnCheck(input) === true) {
	console.log('Карта верная!');
} else {
	console.log('Неверные данные карты');
}

function luhnCheck(cardNumber) {
	cardNumber = String(cardNumber).replace(/\D/g, '');

	if (cardNumber.length < 12) return false;
	
	let sum = 0;
  	let shouldDouble = false;

	for (let i = cardNumber.length - 1; i >= 0; i--) {
		let digit = Number(cardNumber[i]);

		if (shouldDouble) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}

		sum += digit;
		shouldDouble = !shouldDouble;
	}

	return sum % 10 === 0;
}