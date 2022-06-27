function fun() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;

if (firstName == ""  || lastName == "" ||parseInt(phone.lentgh) < 10) {
    alert("Please fill in all fields");
}
    
}