// withdraw button event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdraw = getInputValueById('withdraw-amount-field');
    if(isNaN(newWithdraw)){
        alert('Please provide a valid number');
        return;
    }
    const prevWithdraw = getTextElementValueById('withdraw-field');
    const totalWithdraw = prevWithdraw + newWithdraw;
    const prevBalance = getTextElementValueById('balance-field');
    if(newWithdraw > prevBalance){
        alert('Your account does not have enough money');
        return;
    }
    const totalBalance = prevBalance - newWithdraw;
    setElementValueById('withdraw-field', totalWithdraw);
    setElementValueById('balance-field', totalBalance);
})