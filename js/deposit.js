// deposit button event handler
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDeposit = getInputValueById('deposit-amount-field');
    if(isNaN(newDeposit)){
        alert('Please provide a valid number');
        return;
    }
    const prevDeposit = getTextElementValueById('deposit-field');
    const totalDeposit = prevDeposit + newDeposit;
    const prevBalance = getTextElementValueById('balance-field');
    const totalBalance = prevBalance + newDeposit;
    setElementValueById('deposit-field', totalDeposit);
    setElementValueById('balance-field', totalBalance);
})