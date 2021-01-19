let backButton = document.getElementById("backButton");
let registerForm = $("#loginForm");

function changePopup (destinationPopup) {
    chrome.browserAction.setPopup({popup: destinationPopup});
    window.location.href=destinationPopup;
}

backButton.onclick = function() {changePopup("startPopup.html");};

function loginRequest(
  username,
  password) {
    $.post(
      "https://phoenixconversions-1.herokuapp.com/login?username=" + username + "&password=" + password,
      function (data, status, xhr) {
        localStorage.setItem("loginToken", xhr.getResponseHeader("Authorization"));
        changePopup("startPopup.html")
    });
}

registerForm.submit(function(e) {
  e.preventDefault();
  var username = $("#username").val();
  var password = $("#password").val();
  loginRequest(username, password);
});