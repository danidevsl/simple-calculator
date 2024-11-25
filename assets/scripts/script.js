// Função para calcular a porcentagem
function appendPercentage() {
    const currentValue = document.getElementById('result').value;
    if (currentValue) {
        // Calcula a porcentagem (divide o valor por 100)
        document.getElementById('result').value = currentValue / 100;
    }
}

// As outras funções permanecem as mesmas
function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function appendValue(value) {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue + value;
}

function calculate() {
    const currentValue = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(currentValue); // Avalia a expressão matemática
    } catch (e) {
        document.getElementById('result').value = 'Erro'; // Se ocorrer erro na expressão, mostra "Erro"
    }
}
