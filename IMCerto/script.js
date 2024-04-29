// Função para calcular o IMC
function calculateIMC(weight, height) {
    const heightInMeters = height / 100; // Converte altura de cm para metros
    return (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calcula o IMC
}

// Função para calcular o intervalo de peso ideal
function calculateIdealWeightRange(height) {
    const heightInMeters = height / 100;
    const idealWeightLow = (18.5 * heightInMeters * heightInMeters).toFixed(2);
    const idealWeightHigh = (24.9 * heightInMeters * heightInMeters).toFixed(2);
    return [idealWeightLow, idealWeightHigh];
}

// Função para determinar a descrição do IMC
function determineIMCDescription(imc) {
    if (imc < 18.5) {
        return "Você está abaixo do peso ideal.";
    } else if (imc <= 24.9) {
        return "Você está com o peso normal.";
    } else if (imc <= 29.9) {
        return "Você está com sobrepeso.";
    } else if (imc <= 34.9) {
        return "Obesidade grau I.";
    } else if (imc <= 39.9) {
        return "Obesidade grau II (severa).";
    } else {
        return "Obesidade grau III (mórbida).";
    }
}

// Função para gerar a mensagem de resultado
function generateResultMessage(imc, description, lowWeight, highWeight) {
    return `Seu IMC é: ${imc} (${description}). Seu peso ideal está entre ${lowWeight} kg e ${highWeight} kg.`;
}

// Adiciona o evento ao formulário
document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!weight || !height) {
        document.getElementById('result').innerText = "Por favor, preencha ambos os campos corretamente.";
        return;
    }

    const imc = calculateIMC(weight, height);
    const [idealWeightLow, idealWeightHigh] = calculateIdealWeightRange(height);
    const imcDescription = determineIMCDescription(imc);
    const resultMessage = generateResultMessage(imc, imcDescription, idealWeightLow, idealWeightHigh);

    document.getElementById('result').innerHTML = resultMessage;
});
