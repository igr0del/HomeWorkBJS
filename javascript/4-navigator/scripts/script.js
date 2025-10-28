function calculateSimpleDistance(positionLat, positionLong, addressLat, addressLong) {
  const deltaLat = addressLat - positionLat;
  const deltaLong = addressLong - positionLong;
  return Math.sqrt(Math.pow(deltaLat, 2) + Math.pow(deltaLong, 2));
}

function calculateAndDisplay() {
  const positionLat = parseFloat(document.getElementById('positionLat').value);
  const positionLong = parseFloat(document.getElementById('positionLong').value);
  const addressLat = parseFloat(document.getElementById('addressLat').value);
  const addressLong = parseFloat(document.getElementById('addressLong').value);
  const resultElement = document.getElementById('result');

  if (isNaN(positionLat) || isNaN(positionLong) || isNaN(addressLat) || isNaN(addressLong)) {
    resultElement.textContent = 'Пожалуйста, введите корректные числа во все поля.';
    return;
  }

  const distance = calculateSimpleDistance(positionLat, positionLong, addressLat, addressLong);
  resultElement.textContent = `Расстояние: ${distance.toFixed(2)}`;
}
