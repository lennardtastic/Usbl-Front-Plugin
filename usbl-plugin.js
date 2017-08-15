var conversation;

function unassign() {
  Front.unassign(conversation);
}

function toggleArchive() {
  Front.toggleArchive(conversation);
}

function toggleTrashed() {
  Front.toggleTrashed(conversation);
}

function reply() {
  Front.reply({
    body: 'Template reply',
    subject: 'Template subject',
  }, false, conversation);
}

function alertDialog() {
  Front.dialog('alert', {
    title: 'I\'m an alert dialog',
    message: 'You are now alerted',
  }, function() {
    console.log('Alert closed');
  });
}

function confirmDialog() {
  Front.dialog('confirm', {
    title: 'I\'m a confirm dialog',
    message: 'Do you confirm',
    okTitle: 'OK Button',
    cancelTitle: 'Cancel Button'
  }, function(confirmed) {
    if (confirmed)
      console.log('User confirmed');
    else
      console.log('User cancelled');
  });
}

function promptDialog() {
  Front.dialog('prompt', {
    title: 'I\'m a prompt dialog',
    message: 'Please enter something'
  }, function(data) {
    if (data)
      console.log('User input :', data);
    else
      console.log('User cancelled');
  });
}

function fetchTeammates() {
  Front.fetchAllowedTeammates(function(teammates) {
    if (!teammates)
      return;

    console.log(teammates);
  });
}

function fetchTags() {
  Front.fetchAllowedTags(function(tags) {
    if (!tags)
      return;

    console.log(tags);
  });
}

/**
 * When a converstation is selected
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
Front.on('conversation', function(data) {
  conversation = data.conversation;
  Front.fetchTags();
});

/**
 * Functions for Tagging conversations.
 * Usage: simply call function
 * @return Conversation gets tagged
 */

//Contact type
function tagCustomerSupport() {
  Front.attachTag("customer_support");
}
function tagCSMSupport() {
  Front.attachTag("csm_support");
}
function tagSalesSupport() {
  Front.attachTag("sales_support");
}
function tagUsblOther() {
  Front.attachTag("other");
}

//Product or Service Type
function tagUsblWebsites() {
  Front.attachTag("u4w");
}
function tagUsblApps() {
  Front.attachTag("u4a");
}
function tagUsblEmail() {
  Front.attachTag("u4e");
}
function tagUsblGeneral() {
  Front.attachTag("general");
}
function tagUsblInPage() {
  Front.attachTag("in-page");
}
function tagUsblApi() {
  Front.attachTag("api");
}

//Product Subject type
function tagUsblCustomization() {
  Front.attachTag("customization");
}
function tagUsblFeature() {
  Front.attachTag("feature_request");
}
function tagUsblBug() {
  Front.attachTag("bug");
}


//Misc type
function tagUsblLead() {
  Front.attachTag("lead");
}
function tagUsblBlog() {
  Front.attachTag("blog");
}
function tagUsblSpam() {
  Front.attachTag("spam");
}
function tagUsblOoo() {
  Front.attachTag("ooo");
}
