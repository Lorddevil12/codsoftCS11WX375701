const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '';
        } else if (value === '=') {
            if (operator && previousInput && currentInput) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = '';
                display.textContent = currentInput;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                if (previousInput) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operator) {
        case '+': return (a + b).toString();
        case '-': return (a - b).toString();
        case '*': return (a * b).toString();
        case '/': return (a / b).toString();
        default: return '';
    }
}
