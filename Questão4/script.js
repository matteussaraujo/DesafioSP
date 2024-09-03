function calculatePercentages() {
    const faturamentoPorEstado = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

    const porcentagens = Object.entries(faturamentoPorEstado).map(([estado, faturamento]) => {
        const percentual = (faturamento / totalFaturamento * 100).toFixed(2);
        return { estado, percentual };
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = porcentagens.map(({ estado, percentual }) =>
        `${estado}: ${percentual}%`
    ).join('<br>');
}
