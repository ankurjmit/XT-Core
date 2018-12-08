function init() {
    var inputFirst = 0;
    var inputSecond = 0;
    var currentOperator = null;
    let allbtn = document.getElementsByTagName('button');

    for (let i = 0; i < allbtn.length; i++) {
        allbtn[i].addEventListener('click', function (e) {
            input(e.target.textContent);
        })
    }

    function input(value) {

        if (isNaN(parseInt(value))) {
            if (value === 'Clear') {
                resetAll();
            }
            else if (value === '=' && inputFirst != 0 && inputSecond != 0) {
                let result = calculateResult(inputFirst, inputSecond, currentOperator);
                display(result);
                inputFirst = result;
                inputSecond = 0;
                currentOperator = null;
            }
            else if (!currentOperator && inputSecond == 0) {
                currentOperator = value;
            }
            else {
                let result = calculateResult(inputFirst, inputSecond, currentOperator);
                display(result);
                inputFirst = result;
                inputSecond = 0;
                currentOperator = null;
            }
        }
        else {
            if (!currentOperator || currentOperator == '=') {
                inputFirst = inputFirst * 10 + parseInt(value);
                display(inputFirst);
            }
            else {
                inputSecond = inputSecond * 10 + parseInt(value);
                display(inputSecond);
            }
        }
    }

    function calculateResult(a, b, operator) {
        switch (operator) {
            case '+':
                return parseInt(a) + parseInt(b);
                break;
            case '-':
                return parseInt(a) - parseInt(b);
                break;
            case '*':
                return parseInt(a) * parseInt(b);
                break;
            case '/':
                return parseInt(a) / parseInt(b);
                break;
            default:
                return 'error';
        }
    }

    function display(value) {
        document.getElementById('input').value = value;
    }

    function resetAll() {
        display(' ');
        inputFirst = 0;
        inputSecond = 0;
        currentOperator = null;
    }

}
window.onload = init;