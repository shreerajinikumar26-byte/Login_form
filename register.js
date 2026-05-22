function register(){

    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(
        user => user.email === email
    );

    if(existingUser){

        alert("⚠ Email Already Registered!");

    }
    else{

        let userData = {
            email: email,
            username: username,
            password: password,
            phone: phone
        };

        users.push(userData);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("✨ Registered Successfully!");

        window.location.href = "index.html";
    }
}