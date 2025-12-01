const input = prompt('Введите номер карты');

if (luhnCheck(input)){
	console.log('Карта верная!');
}
else {
	console.log('Не верные данные карты');
}

function luhnCheck(cardNumber) {
	cardNumber = cardNumber.toString().replace(/\D+/g, '');

	if (cardNumber.length < 12) return false;
	
	let sum = 0;

	  for (let i = num.length - 1; i >= 0; i--) {
        let digit = Number(num[i]);

        if (double) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        double = !double;
    }

	return sum % 10 === 0;
}