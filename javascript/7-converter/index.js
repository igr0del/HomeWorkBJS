const amount = Number(prompt("Сколько рублей вы имеете:"));
const fromCurrency = prompt('Выберите валюту, которую хотите конвертировать (RUB, USD, EUR, GBP):');
const toCurrency = prompt('Выберите валюту, в которую хотите конвертировать (RUB, USD, EUR, GBP):');

function convertCurrency(amount, fromCurrency, toCurrency){
	const rates = {
    	USD: 1,
   		RUB: 0.011, 
    	EUR: 1.08,  
    	GBP: 1.27   
  	};

	const normalize = (cur) => {
    	cur = cur.trim().toUpperCase();
		if (cur === "РУБ" || cur === "₽") return "RUB";
		if (cur === "$" || cur === "USD") return "USD";
		if (cur === "€" || cur === "EUR") return "EUR";
		if (cur === "£" || cur === "GBP") return "GBP";
		return cur;
  	};

   	fromCurrency = fromCurrency.toUpperCase();
	toCurrency = toCurrency.toUpperCase();

	if (!rates[fromCurrency] || !rates[toCurrency]) {
    	return null;
  	}

	const amountInUSD = amount * rates[fromCurrency];
  	const convertedAmount = amountInUSD / rates[toCurrency];

  	return convertedAmount;
}

const result = convertCurrency(amount, fromCurrency, toCurrency);

if (result === null) {
  alert("Ошибка: конвертация не поддерживается!");
} else {
  alert(`Вы можете получить ${result.toFixed(2)} ${toCurrency} за ваши ${amount} ${fromCurrency}.`);
}