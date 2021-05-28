let formRegister = document.querySelector("#register");
let form_RegisterBtn = document.querySelector("#register .form_group_btn");

validateEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}

checkInputRegister = (input)=>{
    let err_val= formRegister.querySelector(`label[data-err="${input.id}"]`);
    let val = input.value.trim();
    let err_name = formRegister.querySelector('.err-name-block');
    let success_name = formRegister.querySelector('.success-name-block');
    let err_email = formRegister.querySelector('.err-email-block');
    let success_email = formRegister.querySelector('.success-email-block');
    let err_pass = formRegister.querySelector('.err-pass-block');
    let success_pass = formRegister.querySelector('.success-pass-block');
    let err_enterpass = formRegister.querySelector('.err-enterpass-block');
    let success_enterpass = formRegister.querySelector('.success-enterpass-block');

    let val_enterPass = formRegister.querySelector("#check-err-pass").value;

    switch(input.name){
        case "names":
            if(val == ""){
                err_name.style.display = "block";
                success_name.style.display = "none";
                err_val.innerHTML = "*This field cannot be left blank";
            }
            else{
                err_name.style.display = "none";
                success_name.style.display = "block";
                err_val.innerHTML = "";
            }
            break;
        case "email":
            if(val == ""){
                err_email.style.display = "block";
                success_email.style.display = "none";
                err_val.innerHTML = "*This field cannot be left blank";
            }
            else if(!validateEmail(val)){
                err_email.style.display = "block";
                success_email.style.display = "none";
                err_val.innerHTML = "*Email is invalid";
            }else{
                err_email.style.display = "none";
                success_email.style.display = "block";
                err_val.innerHTML = "";
            }
            break;
        case "password":
            if(val == ""){
                err_pass.style.display = "block";
                success_pass.style.display = "none";
                err_val.innerHTML = "*This field cannot be left blank";
            }
            else if(val.length < 6){
                err_pass.style.display = "block";
                success_pass.style.display = "none";
                err_val.innerHTML = "*Password must be at least 6 characters";
            }else{
                err_pass.style.display = "none";
                success_pass.style.display = "block";
                err_val.innerHTML = "";
            }
            break;
        case "enterpassword":
            if(val == ""){
                err_enterpass.style.display = "block";
                success_enterpass.style.display = "none";
                err_val.innerHTML = "*This field cannot be left blank";
            }
            else if(val.length < 6){
                err_enterpass.style.display = "block";
                success_enterpass.style.display = "none";
                err_val.innerHTML = "*Password must be at least 6 characters";
            }
            else if(val !== val_enterPass){
                err_enterpass.style.display = "block";
                success_enterpass.style.display = "none";
                err_val.innerHTML = "*Password Incorrect";
            }
            else{
                err_enterpass.style.display = "none";
                success_enterpass.style.display = "block";
                err_val.innerHTML = "";
            }
            break;     
    }
}

checkFormRegister = () =>{
    let inputss = formRegister.querySelectorAll(".form_group_input");
    input = inputss.forEach(input => checkInputRegister(input));
}


form_RegisterBtn.onclick = ()=>{
    checkFormRegister()
}

let inputss = formRegister.querySelectorAll('.form_group_input')
inputss.forEach(input => {
    input.addEventListener('focusout', () => {
        checkInputRegister(input)
    })
})

