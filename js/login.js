// Submit button event handler
document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email-field');
    const password = document.getElementById('password-field');
    if(email.value === 'islami@bank.com' && password.value === '1999'){
        window.location.href = 'bank.html';
    }
    else{
        password.value = '';
        alert('Your password is incorrect. Try again');
    }
})