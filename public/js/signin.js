let user = document.getElementById("username");
let pass = document.getElementById("password");
let button = document.getElementById('button');
let error = document.querySelector("#error")
button.onclick=inputChange;
    
function inputChange(){
    x = user.value;
    y = pass.value;
    if(x=="" || y==""){
        error.style.display = 'block';
        error.innerHTML = "Please Input your Username and Password"
    }
    
}