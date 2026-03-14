function validateForm() {
let name=document.getElementById("name");
let email=document.getElementById("email");
let pass=document.getElementById("pass");
let cpass=document.getElementById("cpass");
let address=document.getElementById("address");

let namePattern=/^[A-Z ]+$/;
let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
let cpassPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

if (name.value=="" ||email.value=="" || pass.value=="" || cpass.value=="" || address.value==""){
    alert("Please fill in all fields correctly.");
    return false;
}
else if (!namePattern.test(name.value)){
    alert("Name must contain only uppercase letters and spaces.");
    return false;
}
else if (!emailPattern.test(email.value)){
    alert("Please enter a valid email address.");
    return false;
}
else if (!passPattern.test(pass.value)){
    alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    return false;
}
else if (cpass.value!=pass.value){
    alert("Passwords do not match.");
    return false;
}
else if (!cpassPattern.test(cpass.value)){
    alert("Confirm Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
    return false;
}
else{
    alert("Registration successful!");
    return true;
}

}


