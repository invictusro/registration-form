var password = document.getElementById("password");
var unmatchedPass = document.getElementById("unmatched-pass");
var confirmPasswordElement = document.getElementById("confirm-password");

var checkPassword = function () {
  var confirmedPassword = confirmPasswordElement.value;

  if (confirmedPassword.length > 0) {
    var inputPassword = password.value;

    if (inputPassword == confirmedPassword) {
      unmatchedPass.style.display = "none";
    } else {
      unmatchedPass.style.display = "block";
    }
  }
};

setInterval(checkPassword, 2000);
