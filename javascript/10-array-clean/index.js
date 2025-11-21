const removeByCondition = (arr, shouldRemove) =>
  arr.filter(n => !shouldRemove(n));

const createShouldRemove = barierNum =>
  n => n > barierNum;

const shouldRemove = createShouldRemove(5);

const input = [3, 6, 9, 2];
const output = removeByCondition(input, shouldRemove);

console.log(output); // [3, 2]