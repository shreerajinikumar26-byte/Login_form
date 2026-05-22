function login(){

    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
        u => u.email === email && u.username === username
    );

    if(user){

        if(user.password === password){

            alert("✨ Login Successful!");

        }
        else{

            alert("❌ Wrong Password!");

        }

    }
    else{

        alert("⚠ Email Not Registered!");
        window.location.href = "register.html";

    }
}