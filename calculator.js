document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.innerText = '';
            } else if (button.id === 'delete') {
                currentInput = currentInput.slice(0, -1);
                display.innerText = `${previousInput} ${operator || ''} ${currentInput}`;
            } else if (button.id === 'equals') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = null;
                }
            } else if (button.id === 'add' || button.id === 'subtract' || button.id === 'multiply' || button.id === 'divide') {
                if (currentInput) {
                    operator = button.innerText;
                    previousInput = currentInput;
                    currentInput = '';
                    display.innerText = `${previousInput} ${operator}`;
                }
            } else {
                currentInput += button.innerText;
                display.innerText = `${previousInput} ${operator || ''} ${currentInput}`;
            }
        });
    });
});
