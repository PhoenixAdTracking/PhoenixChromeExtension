const fbAccessToken = "EAANF12FuYPUBALtOUwJ808wqzIqoxNZCVRTLQl7jG1dqXZABetaZAuzwikY1XVd3dhIJPZAZAF0GocuRYikZCvO9Ku8As20ssmilKvAz3iXYWiiU9HGLStjAvLBD20zgHKZCNLOWSn0Bg8Is6q9XBYeRdFc3LrMybMlKa7qXYlweZAzdX0Kp8Ar3AsXnoZBnPN4OJpIXNWIe6waTvcvdVOViAkwLFkBJfmNnnAvCs4LiSDwZDZD";
const fbAdAccountId = "act_466977260656388";
const loginToken = "Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJpc3MiOiJQaG9lbml4Q29udmVyc2lvbnMiLCJhdWQiOiJQaG9lbml4Q29udmVyc2lvbnMiLCJzdWIiOiJraWVybmFuIiwiZXhwIjoxNjExMzQ2MzIzfQ.B32AyJ9sdWgfOp-OMlryNVCzEB34DNEL2x3Ji7PK4qU57vX01lkkUj5S7-kqZIKYu6j3mxzDBLIIh54VQKcwMg";


//Create Bar that will contain all selectable drop-downs
var googleInsightsBar = document.createElement("div");
googleInsightsBar.classList.add("docs-collapsable-toolbar");
googleInsightsBar.style = "margin-right: 26px, max-width: 1173px";

//Create the ad account drop down and attach it to the Bar
var adAccountLabel = document.createElement("label");
adAccountLabel.setAttribute("for", "adAccounts");
adAccountLabel.innerHTML = "Select Ad Account";
var adAccountSelect = document.createElement("select");
adAccountSelect.setAttribute("for", "adAccounts");
adAccountSelect.setAttribute("id", "adAccounts");
var placeholderAdAccount = document.createElement("option");
placeholderAdAccount.setAttribute("value", "");
placeholderAdAccount.innerHTML = "Ad Accounts";
var initialAdAccount = document.createElement("option");
initialAdAccount.setAttribute("value", "act_466977260656388");
initialAdAccount.innerHTML = "Genesis Allure";
adAccountSelect.append(placeholderAdAccount);
adAccountSelect.append(initialAdAccount);
googleInsightsBar.append(adAccountLabel);
googleInsightsBar.append(adAccountSelect);

//Create the campaign drop down and attach it to the Bar
var campaignLabel = document.createElement("label");
campaignLabel.setAttribute("for", "campaign");
campaignLabel.innerHTML = "Select Campaign";
var campaignSelect = document.createElement("select");
campaignSelect.setAttribute("for", "campaign");
campaignSelect.setAttribute("id", "campaign");
var placeholderCampaign = document.createElement("option");
placeholderCampaign.setAttribute("value", "");
placeholderCampaign.innerHTML = "Campaign";
campaignSelect.append(placeholderCampaign);
googleInsightsBar.append(campaignLabel);
googleInsightsBar.append(campaignSelect);

//Create the ad set drop down and attach it to the Bar
var adsetLabel = document.createElement("label");
adsetLabel.setAttribute("for", "adset");
adsetLabel.innerHTML = "Select AdSet";
var adsetSelect = document.createElement("select");
adsetSelect.setAttribute("for", "adset");
adsetSelect.setAttribute("id", "adset");
var placeholderAdset = document.createElement("option");
placeholderAdset.setAttribute("value", "");
placeholderAdset.innerHTML = "Ad Set";
adsetSelect.append(placeholderAdset);
googleInsightsBar.append(adsetLabel);
googleInsightsBar.append(adsetSelect);
var chromeBar = document.getElementById("docs-chrome");
chromeBar.append(googleInsightsBar);

adAccountSelect.onchange = function () {
  clearOptions(campaignSelect);
  clearOptions(adsetSelect);
  var currentAdAccount = adAccountSelect.value;
  $.ajax({
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", loginToken);
    },
    dataType: 'json',
    method: 'GET',
    contentType: 'application/json',
    url: "https://phoenixconversions-1.herokuapp.com/insights/multi/campaigns",
    data: JSON.stringify({
      "adAccountId": currentAdAccount,
      "accessToken": fbAccessToken}),
    success: function (data, textStatus, jqXHR) {
      alert("success!");
      var length = data.length;
      for (i = 0; i < length; i++) {
        console.log(campaign.name);
        let campaign = data[i];
        let campaignOption = document.createElement("option");
        campaignOption.setAttribute("value", campaign.id);
        campaignOption.innerHTML = campaign.name;
        campaignSelect.append(campaignOption);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.status + ": " + textStatus + ": " + jqXHR.responseText);
    }});
};

campaignSelect.onchange = function () {
  clearOptions(adsetSelect);
  var currentCampaign = campaignSelect.value;
  $.ajax({
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", loginToken);
    },
    dataType: 'json',
    method: 'GET',
    contentType: 'application/json',
    url: "https://phoenixconversions-1.herokuapp.com/insights/multi/adsets",
    data: JSON.stringify({
      "campaignId": currentCampaign,
      "accessToken": fbAccessToken}),
    success: function (data, textStatus, jqXHR) {
      var length = data.length;
      for (i = 0; i < length; i++) {
        let adset = data[i];
        let adsetOption = document.createElement("option");
        adsetOption.setAttribute("value", adset.id);
        adsetOption.innerHTML = adset.name;
        adsetSelect.append(campaignOption);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert(jqXHR.status + ": " + textStatus + ": " + jqXHR.responseText);
    }});};

function clearOptions (selectElement) {
  var length = selectElement.options.length;
  for (i = length-1; i >= 0; i--) {
    selectElement.options[i] = null;
  }
}
