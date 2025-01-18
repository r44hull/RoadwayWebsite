function validateForm() {
    var name = document.forms["Registration"]["Name"].value;
    var email = document.forms["Registration"]["E-Mail"].value;
    var password = document.forms["Registration"]["Password"].value;
    var phone = document.forms["Registration"]["Phone_no"].value;
    var address = document.forms["Registration"]["Address"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (phone == "") {
        alert("Phone number must be filled out");
        return false;
    }
    if (address == "") {
        alert("Address must be filled out");
        return false;
    }
    alert("Form submitted successfully!");
    location.reload();
    return false;
}
