let backButton = document.getElementById("backButton");

function changePopup (destinationPopup) {
    chrome.browserAction.setPopup({popup: destinationPopup});
}

backButton.onclick = changePopup("startPopup.html");