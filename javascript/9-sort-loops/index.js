const arrayInput = prompt("Enter numbers separated by commas:", "3,1,4,1,5,9");

array = arrayInput.split(',').map(Number);

sortArray(array);

function sortArray(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	console.log("Sorted array:", array);
}

