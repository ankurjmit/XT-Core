function init() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let company = document.getElementById('company');
    let nameErrorSpan = document.getElementById('nameErrorSpan');
    let emailErrorSpan = document.getElementById('emailErrorSpan');
    let companyErrorSpan = document.getElementById('companyErrorSpan');
    
    name.addEventListener('blur',function(e){
        if(!e.target.value){
            nameErrorSpan.classList.add('nameErrorMsg');
            name.classList.add('invalid');
        }
    })
    name.addEventListener('focus',function(){
        nameErrorSpan.classList.remove('nameErrorMsg');
        name.classList.remove('invalid');
    })

    email.addEventListener('blur',function(e){
        if(!e.target.value || e.target.value.indexOf('@') == -1){
            emailErrorSpan.classList.add('nameErrorMsg');
            email.classList.add('invalid');
        }
    })
    email.addEventListener('focus',function(){
        emailErrorSpan.classList.remove('nameErrorMsg');
        email.classList.remove('invalid');
    })

    company.addEventListener('blur',function(e){
        if(!e.target.value){
            companyErrorSpan.classList.add('nameErrorMsg');
            company.classList.add('invalid');
        }
    })
    company.addEventListener('focus',function(){
        companyErrorSpan.classList.remove('nameErrorMsg');
        company.classList.remove('invalid');
    })
    
    document.getElementById('form').onsubmit = function(){
        alert(`Name : ${name.value} Company : ${company.value}  Email : ${email.value}` )
    }
}

window.onload = init;
