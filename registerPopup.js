let backButton = document.getElementById("backButton");
let registerForm = $("#registerForm");

function changePopup (destinationPopup) {
    chrome.browserAction.setPopup({popup: destinationPopup});
    window.location.href=destinationPopup;
}

backButton.onclick = function () {changePopup("startPopup.html");};

function loginRequest(
  username,
  password) {
    $.post(
      "http://localhost:8080/login?username=kiernan&password=password",
      {"username" : "kiernan", "password": "password"},
      function (data, status, xhr) {
        chrome.storage.sync.set({"loginToken", xhr.getResponseHeader("Authorization")});
    }).fail(function () {
      console.log("error");
    });
}

function newBusinessRequest (
  businessName,
  username,
  password,
  firstname,
  lastname) {
    $.ajax({
    dataType: 'json',
    method: 'POST',
    contentType: 'application/json',
    url: "https://phoenixconversions-1.herokuapp.com/register/business",
    data: JSON.stringify({"name": businessName}),
    success: function (data, textStatus, jqXHR) {
      return newUserRequest(
      username,
      password,
      firstname,
      lastname,
      data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.status + ": " + textStatus + ": " + jqXHR.responseText);
    }});
}

function newUserRequest (
  username,
  password,
  firstname,
  lastname,
  businessId) {
  $.ajax({
    dataType: 'json',
    method: 'POST',
    contentType: 'application/json',
    url: "https://phoenixconversions-1.herokuapp.com/register/user",
    data: JSON.stringify({
      "firstname": firstname,
      "lastname": lastname,
      "username": username,
      "password": password,
      "businessId": businessId,
      "role": "USER"
    }),
    success: function (data, textStatus, jqXHR) {
      loginRequest(username, password);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.status + ": " + textStatus + ": " + jqXHR.responseText);
    }
  });
}

registerForm.submit(function(e) {
  e.preventDefault();
  var username = $("#username").val();
  var password = $("#password").val();
  var firstname = $("#firstname").val();
  var lastname = $("#lastname").val();
  var businessName = $("#businessName").val();
  newBusinessRequest(businessName, username, password, firstname, lastname);
});