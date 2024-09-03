function calculateSum() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById("result").textContent = `O valor de SOMA é ${SOMA}.`;
}

document.addEventListener("DOMContentLoaded", calculateSum);
