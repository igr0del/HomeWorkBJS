const imputPassword = prompt("Enter your password:");
console.log("Вы успешно зарегистрировались!");

const encryptedPassword = crypto(imputPassword);

const loginPassword = prompt("Enter your password to login:");
if (check(encryptedPassword, loginPassword)) {
	console.log("Welcome back!");
} else {
	console.log("Access denied, wrong password!");
}

function crypto(password) {
    const arr = password.split('');
    // Алгоритм: перестановка символов попарно внутри каждого блока по 4
    // p0 <-> p2, p1 <-> p3
    for (let i = 0; i < arr.length; i += 4) {
        if (arr[i + 2] !== undefined) {
            [arr[i], arr[i + 2]] = [arr[i + 2], arr[i]];
        }
        if (arr[i + 3] !== undefined) {
            [arr[i + 1], arr[i + 3]] = [arr[i + 3], arr[i + 1]];
        }
    }

    return arr.join('');
}

function check(encrypted, original) {
    // Дешифровка — это тот же алгоритм (перестановка обратима)
    const decrypted = crypto(encrypted);
    return decrypted === original;
}

