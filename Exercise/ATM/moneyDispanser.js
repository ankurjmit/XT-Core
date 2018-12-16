function init() {
    let finalCount = 0;
    const button = document.getElementById('getMoney');
    const inputBox = document.getElementById('amountToWithdraw');
    const finalCountOfNotes = document.getElementById('total-notes');
    
    inputBox.addEventListener('input', function () {
        button.classList.remove('disabled');
        button.removeAttribute('disabled');
    })
    
    button.addEventListener('click', function () {
        let inputAmount = parseInt(inputBox.value);
        finalCount = 0;
        const denominationsArray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        denominationsArray.forEach(item => {
            let denomination = Math.floor(inputAmount / item);
            displayData(`note-of-${item}`, denomination);
            inputAmount %=item; 
            finalCount+=denomination;
        })
        finalCountOfNotes.innerHTML = finalCount;
    })

    function displayData(id, value) {
        document.getElementById(id).innerHTML = value;
    }
}
window.onload = init;