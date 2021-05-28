//form login

let formLogin = document.querySelector("#login");
let form_btn = document.querySelector("#login .form_group_btn");

validateEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}

checkInput = (input)=>{
    let err_val= formLogin.querySelector(`label[data-err="${input.id}"]`);
    let val = input.value.trim();
    let err_email = formLogin.querySelector('.err-email-block');
    let success_email = formLogin.querySelector('.success-email-block');
    let err_pass = formLogin.querySelector('.err-pass-block');
    let success_pass = formLogin.querySelector('.success-pass-block');

    switch(input.type){
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
    }
}
checkForm = () =>{
    let inputs = formLogin.querySelectorAll(".form_group_input");
    input = inputs.forEach(input => checkInput(input));
}


form_btn.onclick = ()=>{
    checkForm()
}

let inputs = formLogin.querySelectorAll('.form_group_input')
inputs.forEach(input => {
    input.addEventListener('focusout', () => {
        checkInput(input)
    })
})




