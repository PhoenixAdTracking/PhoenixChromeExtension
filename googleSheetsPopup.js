let googleSheetsButton = document.getElementById("googleRedirectButton");

const loginToken = localStorage.getItem("loginToken");
const fbAccessToken = "EAANF12FuYPUBALtOUwJ808wqzIqoxNZCVRTLQl7jG1dqXZABetaZAuzwikY1XVd3dhIJPZAZAF0GocuRYikZCvO9Ku8As20ssmilKvAz3iXYWiiU9HGLStjAvLBD20zgHKZCNLOWSn0Bg8Is6q9XBYeRdFc3LrMybMlKa7qXYlweZAzdX0Kp8Ar3AsXnoZBnPN4OJpIXNWIe6waTvcvdVOViAkwLFkBJfmNnnAvCs4LiSDwZDZD";
const fbAdAccountId = "act_466977260656388";

googleSheetsButton.onclick = function () {
  chrome.tabs.create(
    {
      "url": "https://docs.google.com/spreadsheets/d/15mwOp3INAgKvwnD0VeYCdLPPU3vT0uyc2Fr0c-Z1xn8/edit#gid=0",
      "selected": true,
      "active": true
    },
    function(newTab) {
      setTimeout(function() {
        $.get(
          "<button>TEST</button>",
  //        chrome.runtime.getURL("googleInsightsBar.html"),
          function(data) {
            $(data).appendTo("body")
        });
      }, 4000)
    });
}