console.log("santi kumpuan");
console.log("Tae")

let currentInput = '';
let currentOperation = null;
let previousValue = null;

function appendValue(value) {
  currentInput += value;
  updateResult(currentInput);
}

function performOperation(operation) {
  if (currentInput) {
    if (previousValue === null) {
      previousValue = parseFloat(currentInput);
    } else if (currentOperation) {
      previousValue = calculate(previousValue, parseFloat(currentInput), currentOperation);
    }
  }
  currentInput = '';
  currentOperation = operation;
  updateResult(previousValue);
}

function calculateResult() {
  if (currentInput && currentOperation && previousValue !== null) {
    previousValue = calculate(previousValue, parseFloat(currentInput), currentOperation);
    currentInput = '';
    currentOperation = null;
    updateResult(previousValue);
  }
}

function calculate(a, b, operation) {
  switch (operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return b;
  }
}

function clearResult() {
  currentInput = '';
  currentOperation = null;
  previousValue = null;
  updateResult('');
}

function updateResult(value) {
  document.getElementById('result').value = value || '0';
}