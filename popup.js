let changeView = document.getElementsByClassName('changeView')[0];
console.log(document.getElementsByClassName('changeView'));

chrome.tabs.onActivated.addListener((window) => {
  console.log("Hello");
  console.log("New window: " + window.id);
})
changeView.onclick = function(element) {
  console.log("color activated");
  chrome.browserAction.setPopup({popup: "secondPopup.html"});
  let color = changeView;
  console.log("background color: " + color);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};