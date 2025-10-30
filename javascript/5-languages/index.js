const userLang = navigator.language.split('-')[0];
console.log(userLang);

const messagesRu = 'Привет Сайт!';
const messagesEn = 'Hello Site!';
const messagesDe = 'Hallo Seite!';
const messagesFr = 'Bonjour le site!';
const messagesIt = 'Ciao Sito!';
const messagesEs = '¡Hola Sitio!';

switch (userLang) {
	case 'ru':
		console.log(messagesRu);
		break;
	case 'en':
		console.log(messagesEn);
		break;
	case 'de':
		console.log(messagesDe);
		break;
	case 'fr':
		console.log(messagesFr);
		break;
	case 'it':
		console.log(messagesIt);
		break;
	case 'es':
		console.log(messagesEs);
		break;
	default:
		console.log(messagesEn);
}