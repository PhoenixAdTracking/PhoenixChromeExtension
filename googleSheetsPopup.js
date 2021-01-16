let googleSheetsButton = document.getElementById("googleRedirectButton");

googleSheetsButton.onclick = function () {
  chrome.tabs.create(
    {
      "url": "https://docs.google.com/spreadsheets/d/15mwOp3INAgKvwnD0VeYCdLPPU3vT0uyc2Fr0c-Z1xn8/edit#gid=0",
      "selected": true,
      "active": true
    },
    function(newTab) {});
}