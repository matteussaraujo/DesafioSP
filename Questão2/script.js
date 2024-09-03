function checkarFibonacci() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number) || number < 0) {
        resultDiv.textContent = 'Por favor, insira um número inteiro não negativo.';
        return;
    }

    if (isFibonacci(number)) {
        resultDiv.textContent = `${number} pertence à sequência de Fibonacci.`;
    } else {
        resultDiv.textContent = `${number} não pertence à sequência de Fibonacci.`;
    }
}

function isFibonacci(num) {
    if (num === 0) return true;

    let a = 0;
    let b = 1;
    let c = a + b;

    while (c <= num) {
        if (c === num) return true;
        a = b;
        b = c;
        c = a + b;
    }
    return false;
}
