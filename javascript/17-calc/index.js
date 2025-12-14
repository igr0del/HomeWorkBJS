document.addEventListener("DOMContentLoaded", () => {
  const inputA = document.getElementById("a");
  const inputB = document.getElementById("b");
  const operation = document.getElementById("operation");
  const result = document.getElementById("result");
  const button = document.getElementById("calcBtn");

  function calculate() {
    const aStr = inputA.value.trim();
    const bStr = inputB.value.trim();

    if (aStr === "" || bStr === "") {
      result.value = "Введите оба числа";
      return;
    }

    const a = Number(aStr);
    const b = Number(bStr);

    if (Number.isNaN(a) || Number.isNaN(b)) {
      result.value = "Некорректные числа";
      return;
    }

    let res;

    switch (operation.value) {
      case "add": res = a + b; break;
      case "sub": res = a - b; break;
      case "mul": res = a * b; break;
      case "div":
        if (b === 0) { result.value = "На 0 делить нельзя"; return; }
        res = a / b;
        break;
      default:
        result.value = "Выберите операцию";
        return;
    }

    result.value = Number.isInteger(res) ? String(res) : String(Number(res.toFixed(10)));
  }

  button.addEventListener("click", calculate);

  [inputA, inputB].forEach((inp) => {
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") calculate();
    });
  });
});