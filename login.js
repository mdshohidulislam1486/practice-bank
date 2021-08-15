document.getElementById('login-id').addEventListener('click', function(){
    const emailField =document.getElementById('user-email');const userEmail = emailField.value;
    // different use 
    const userPass =document.getElementById("user-pass").value;
  
    if(userEmail == "naeemkhan1486@gmail.com" && userPass == "1922112"){
        window.location.href = 'banking.html'
    }
}) 