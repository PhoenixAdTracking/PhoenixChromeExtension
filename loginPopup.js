let backButton = document.getElementById("backButton");
let registerForm = $("#loginForm");

function changePopup (destinationPopup) {
    chrome.browserAction.setPopup({popup: destinationPopup});
}

backButton.onclick = changePopup("startPopup.html");

function loginRequest(
  username,
  password) {
    $.post(
      "http://localhost:8080/login?username=kiernan&password=password",
      {"username" : "kiernan", "password": "password"},
      function (data, status, xhr) {
        localStorage.setItem("all headers", xhr.getAllResponseHeaders());
        localStorage.setItem("loginToken", xhr.getResponseHeader("Authorization"));
    }).fail(function () {
      console.log("error");
    });
}

registerForm.submit(function(e) {
  e.preventDefault();
  var username = $("#username").val();
  var password = $("#password").val();
  loginRequest(username, password);
});