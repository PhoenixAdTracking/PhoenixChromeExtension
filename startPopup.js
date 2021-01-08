let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");

function changePopup (destinationPopup) {
      chrome.browserAction.setPopup({popup: destinationPopup});
}
loginButton.onclick = function () {changePopup("loginPopup.html");};

registerButton.onclick = function () {changePopup("registerPopup.html");};
$(document).ready(function() {
  if (localStorage.getItem("loginToken"))
})