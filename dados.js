// Dados completos simulados (14-23/03/2025) para todos os postos e combustíveis
const dadosCombustivel = [];

// Postos e combustíveis
const postos = [
    "Posto Petrobas", 
    "Posto Auto Posto", 
    "Posto Valentim", 
    "Posto Ipiranga", 
    "Posto Shell", 
    "Posto Ataide"
];

const combustiveis = [
    "Gasolina", 
    "Etanol", 
    "Diesel", 
    "Gasolina Aditivada"
];

// Preços base por posto (índice 0-5) e combustível (índice 0-3)
const precosBase = [
    [5.60, 4.50, 6.20, 3.90],  // Posto Petrobas
    [5.70, 4.60, 6.30, 4.00],  // Posto Auto Posto
    [5.80, 4.70, 6.40, 4.10],  // Posto Valentim
    [5.90, 4.80, 6.50, 4.20],  // Posto Ipiranga
    [6.00, 4.90, 6.60, 4.30],  // Posto Shell
    [6.10, 5.00, 6.70, 4.40]   // Posto Ataide
];

// Gerar dados para cada dia (14-23/03/2025)
for (let dia = 14; dia <= 23; dia++) {
    const data = `${dia.toString().padStart(2, '0')}/03/2025`;
    
    postos.forEach((posto, postoIdx) => {
        combustiveis.forEach((combustivel, combIdx) => {
            // Aumento diário de 0.01
            const preco = precosBase[postoIdx][combIdx] + (0.01 * (dia - 14));
            
            dadosCombustivel.push({
                posto,
                combustivel,
                preco: parseFloat(preco.toFixed(2)),
                data
            });
        });
    });
}

// Ordenar por data e posto
dadosCombustivel.sort((a, b) => {
    if (a.data === b.data) {
        return a.posto.localeCompare(b.posto);
    }
    return a.data.localeCompare(b.data);
});