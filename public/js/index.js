// alert('hello');

// Registration form password matched verification
const checkMatchedPassword = function(){
    if(document.getElementById("password").value == document.getElementById("confirm_password").value){
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "matched";
        
        
        
    }else{
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "password not match";
        
         
    };
};