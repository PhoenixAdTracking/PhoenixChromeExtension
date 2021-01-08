let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");

function changePopup (destinationPopup) {
      chrome.browserAction.setPopup({popup: destinationPopup});
}

loginButton.onclick = changePopup("loginPopup.html");

registerButton.onclick = changePopup("registerPopup.html");