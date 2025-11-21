const removeByCondition = (arr, cond) => arr.filter(x => !cond(x));
const shouldRemove = barier => x => x > barier;

const inputArr = [3, 6, 9, 2];
const inputBar = 5;

const output = removeByCondition(inputArr, shouldRemove(inputBar));

console.log(output);