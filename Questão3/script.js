async function calculate() {
    try {
        const response = await fetch('faturamento.json');
        const data = await response.json();
        
        const values = data.map(entry => entry.faturamento).filter(f => f > 0);
        
        if (values.length === 0) {
            document.getElementById('result').textContent = 'Não há dados de faturamento.';
            return;
        }

        const minFaturamento = Math.min(...values);
        const maxFaturamento = Math.max(...values);
        const totalFaturamento = values.reduce((sum, value) => sum + value, 0);
        const mediaFaturamento = totalFaturamento / values.length;
        
        const diasAcimaMedia = data.filter(entry => entry.faturamento > mediaFaturamento).length;
        
        document.getElementById('result').innerHTML = `
            Menor valor de faturamento: R$ ${minFaturamento.toFixed(2)}<br>
            Maior valor de faturamento: R$ ${maxFaturamento.toFixed(2)}<br>
            Número de dias com faturamento acima da média: ${diasAcimaMedia}
        `;
    } catch (error) {
        document.getElementById('result').textContent = 'Erro ao carregar os dados.';
        console.error(error);
    }
}
