function ValidateUsername() {
    var username = document.getElementById("username").value;
    var Errormsg = document.getElementById("errmessage");
    var password = document.getElementById("password").value;
    var passerr = document.getElementById("passworderr");
    var lastchar = username[username.length - 1];
    var correct_way = /^[a-zA-Z0-9_]+$/;

    if (username == "") {
        Errormsg.innerHTML = "** Please fill UserName";
        return false;
    }

    if (username.length < 5) {
        Errormsg.innerHTML = "** Username must be more then 4 letters.";
        return false;
    }

    if (username.length > 25) {
        Errormsg.innerHTML = "** Username must less then 25 letters.";
        return false;
    }

    if (lastchar == "_") {
        Errormsg.innerHTML = "** Username must not end with underscore.";
        return false;
    }

    if (username.match(correct_way))

        true;

    else {
        Errormsg.innerHTML = "Only Alphabets, Numbers and Underscore and between 4 to 25 characters.";
        return false;
    }

    if (password.length < 9) {
        passerr.innerHTML = "** Password must be more then 8 letters"
        return false;
    }
}

// document.getElementById('button').addEventListener('click', focusfield);

// function focusfield() {

//     document.getElementById('username').focus();

// }