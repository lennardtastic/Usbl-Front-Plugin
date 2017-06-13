// Hide the Plugin Tips in the wide layout
function hidePluginTips() {
  if ($('#tipSwitch').prop('checked') === true) {
    $(".tipBlock").hide();
  } else if ($('#tipSwitch').prop('checked') === false) {
    $(".tipBlock").show();
  }
}

// Change the width of the plugin
function changePluginLayout() {
  if ($('#mySwitch').prop('checked') === true) {
    Front.setPanelWidth(120);
    $("#zendeskSearchBlock").hide();
    $("#zendeskResultsBlock").hide();
  } else if ($('#mySwitch').prop('checked') === false) {
    Front.setPanelWidth(300);
    $("#zendeskSearchBlock").show();
    $("#zendeskResultsBlock").show();
  }
}

/**
 * Search for Zendesk articles
 *
 * WIP
 *
 * @return Zendesk Articles Links and Titles
 */
function getZendeskArticles() {
    var zendeskUrl = "https://support.usabilla.com/api/v2/help_center/articles/search.json?query=";
    var zendeskKeyword = $("#zendeskSearchKey").val();
    var zendeskAPI = zendeskUrl + zendeskKeyword;
    $.getJSON(zendeskAPI,
        function(data) {
            $.each(data, function(key, val) {
                if (key === "results") {

                    console.log(val[1].title);
                    console.log(val[1].body.substring(0, 100).replace(/(<([^>]+)>)/ig, ""));
                    $("#zendeskResults").append('<p>' + zendeskResultsTitle + '</p>');
                }

            });
        }
    );
}
