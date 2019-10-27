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

//Domain type
function tagCustomerSupport() {
    Front.attachTag("ask");
}

function tagCSMSupport() {
    Front.attachTag("analyze");
}

function tagSalesSupport() {
    Front.attachTag("act");
}

function tagUsblOther() {
    Front.attachTag("mobile");
}

//Product or Service Type
function tagUsblWebsites() {
    Front.attachTag("u4w");
}

function tagUsblEmail() {
    Front.attachTag("u4e");
}

function tagUsblApps() {
    Front.attachTag("u4a");
}

function tagUsblInPage() {
    Front.attachTag("in-page");
}

function tagUsblAccount() {
    Front.attachTag("account");
}

function tagUsblApi() {
    Front.attachTag("api");
}

function tagUsblGeneral() {
    Front.attachTag("general");
}

//Product Subject type
function tagUsblButton() {
    Front.attachTag("button");
}

function tagUsblForm() {
    Front.attachTag("form");
}

function tagUsblCampaign() {
    Front.attachTag("campaign");
}

function tagUsblCustomization() {
    Front.attachTag("customization");
}

function tagUsblSDK() {
    Front.attachTag("sdk");
}

function tagUsblIntegration() {
    Front.attachTag("integration");
}

//Product Area type
function tagUsblCreation() {
    Front.attachTag("creation");
}

function tagUsblImplementation() {
    Front.attachTag("implementation");
}

function tagUsblAnalysis() {
    Front.attachTag("analysis");
}

function tagUsblSetup() {
    Front.attachTag("setup");
}

function tagUsblTargeting() {
    Front.attachTag("targeting");
}

function tagUsblCustomization() {
    Front.attachTag("customization");
}

function tagUsblIntegration() {
    Front.attachTag("integration");
}

function tagUsblAccess() {
    Front.attachTag("access");
}

function tagUsblRoles() {
    Front.attachTag("roles");
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

//Show labels based on selection made
$(document).ready(function() {

    //Show Customer labels
    $("#customer").click(function() {
        $("#product-list").show();
        $("#product-list").addClass('center-align h-onetwo-rem');
        $("#u4w").show();
        $("#u4w").addClass('button-tag');
        $("#u4e").show();
        $("#u4e").addClass('button-tag');
        $("#u4a").show();
        $("#u4a").addClass('button-tag');
        $("#in-page").show();
        $("#in-page").addClass('button-tag');
        $("#account").show();
        $("#account").addClass('button-tag');
        $("#api").show();
        $("#api").addClass('button-tag');
        $("#general").show();
        $("#general").addClass('button-tag');

        //Show Misc labels button
        $("#misc-list").show();
        $("#misc-list").addClass('center-align h-onetwo-rem');
        $("#lead").show();
        $("#lead").addClass('button-tag');
        $("#blog").show();
        $("#blog").addClass('button-tag');
        $("#spam").show();
        $("#spam").addClass('button-tag');
        $("#ooo").show();
        $("#ooo").addClass('button-tag');

        //Show reset button
        $("#reset").show();
        $("#reset").addClass('button-tag');

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();

        //Hide Area labels      
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show CSM labels
    $("#csm").click(function() {
        $("#product-list").show();
        $("#product-list").addClass('center-align h-onetwo-rem');
        $("#u4w").show();
        $("#u4w").addClass('button-tag');
        $("#u4e").show();
        $("#u4e").addClass('button-tag');
        $("#u4a").show();
        $("#u4a").addClass('button-tag');
        $("#in-page").show();
        $("#in-page").addClass('button-tag');
        $("#account").show();
        $("#account").addClass('button-tag');
        $("#api").show();
        $("#api").addClass('button-tag');
        $("#general").show();
        $("#general").addClass('button-tag');

        //Show Misc labels button
        $("#misc-list").show();
        $("#misc-list").addClass('center-align h-onetwo-rem');
        $("#lead").show();
        $("#lead").addClass('button-tag');
        $("#blog").show();
        $("#blog").addClass('button-tag');
        $("#spam").show();
        $("#spam").addClass('button-tag');
        $("#ooo").show();
        $("#ooo").addClass('button-tag');

        //Show reset button
        $("#reset").show();
        $("#reset").addClass('button-tag');

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();

        //Hide Area labels      
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show Sales labels
    $("#sales").click(function() {
        $("#product-list").show();
        $("#product-list").addClass('center-align h-onetwo-rem');
        $("#u4w").show();
        $("#u4w").addClass('button-tag');
        $("#u4e").show();
        $("#u4e").addClass('button-tag');
        $("#u4a").show();
        $("#u4a").addClass('button-tag');
        $("#in-page").show();
        $("#in-page").addClass('button-tag');
        $("#account").show();
        $("#account").addClass('button-tag');
        $("#api").show();
        $("#api").addClass('button-tag');
        $("#general").show();
        $("#general").addClass('button-tag');

        //Show Misc labels button
        $("#misc-list").show();
        $("#misc-list").addClass('center-align h-onetwo-rem');
        $("#lead").show();
        $("#lead").addClass('button-tag');
        $("#blog").show();
        $("#blog").addClass('button-tag');
        $("#spam").show();
        $("#spam").addClass('button-tag');
        $("#ooo").show();
        $("#ooo").addClass('button-tag');

        //Show reset button
        $("#reset").show();
        $("#reset").addClass('button-tag');

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();

        //Hide Area labels      
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show Other labels
    $("#other").click(function() {
        $("#product-list").show();
        $("#product-list").addClass('center-align h-onetwo-rem');
        $("#u4w").show();
        $("#u4w").addClass('button-tag');
        $("#u4e").show();
        $("#u4e").addClass('button-tag');
        $("#u4a").show();
        $("#u4a").addClass('button-tag');
        $("#in-page").show();
        $("#in-page").addClass('button-tag');
        $("#account").show();
        $("#account").addClass('button-tag');
        $("#api").show();
        $("#api").addClass('button-tag');
        $("#general").show();
        $("#general").addClass('button-tag');

        //Show Misc labels button
        $("#misc-list").show();
        $("#misc-list").addClass('center-align h-onetwo-rem');
        $("#lead").show();
        $("#lead").addClass('button-tag');
        $("#blog").show();
        $("#blog").addClass('button-tag');
        $("#spam").show();
        $("#spam").addClass('button-tag');
        $("#ooo").show();
        $("#ooo").addClass('button-tag');

        //Show reset button
        $("#reset").show();
        $("#reset").addClass('button-tag');

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();

        //Hide Area labels      
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show U4W labels
    $("#u4w").click(function() {
        $("#subject-list").show();
        $("#subject-list").addClass('center-align h-onetwo-rem');
        $("#button").show();
        $("#button").addClass('button-tag');
        $("#form").show();
        $("#form").addClass('button-tag');
        $("#campaign").show();
        $("#campaign").addClass('button-tag');
        $("#customization1").show();
        $("#customization1").addClass('button-tag');
        $("#integration1").show();
        $("#integration1").addClass('button-tag');

        //Hide unused Subject labels
        $("#sdk").hide();

        //Hide Area labels      
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show U4E labels
    $("#u4e").click(function() {
        $("#area-list").show();
        $("#area-list").addClass('center-align h-onetwo-rem');
        $("#creation").show();
        $("#creation").addClass('button-tag');
        $("#implementation").show();
        $("#implementation").addClass('button-tag');
        $("#analysis").show();
        $("#analysis").addClass('button-tag');
        $("#customization2").show();
        $("#customization2").addClass('button-tag');
        $("#integration2").show();
        $("#integration2").addClass('button-tag');

        //Hide unused Area labels      
        $("#setup").hide();
        $("#targeting").hide();
        $("#access").hide();
        $("#roles").hide();

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();
    });

    //Show U4A labels
    $("#u4a").click(function() {
        $("#subject-list").show();
        $("#subject-list").addClass('center-align h-onetwo-rem');
        $("#form").show();
        $("#form").addClass('button-tag');
        $("#campaign").show();
        $("#campaign").addClass('button-tag');
        $("#sdk").show();
        $("#sdk").addClass('button-tag');
        $("#integration1").show();
        $("#integration1").addClass('button-tag');

        //Hide unused Subject labels
        $("#button").hide();
        $("#customization1").hide();

        //Hide Area labels      
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show In-Page labels
    $("#in-page").click(function() {
        $("#area-list").show();
        $("#area-list").addClass('center-align h-onetwo-rem');
        $("#creation").show();
        $("#creation").addClass('button-tag');
        $("#implementation").show();
        $("#implementation").addClass('button-tag');
        $("#analysis").show();
        $("#analysis").addClass('button-tag');
        $("#customization2").show();
        $("#customization2").addClass('button-tag');
        $("#integration2").show();
        $("#integration2").addClass('button-tag');

        //Hide unused Area labels      
        $("#setup").hide();
        $("#targeting").hide();
        $("#access").hide();
        $("#roles").hide();

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();
    });

    //Show Account labels
    $("#account").click(function() {
        $("#area-list").show();
        $("#area-list").addClass('center-align h-onetwo-rem');
        $("#access").show();
        $("#access").addClass('button-tag');
        $("#roles").show();
        $("#roles").addClass('button-tag');

        //Hide unused Area labels      
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();

        //Hide Subject labels      
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();
    });

    //Show Button labels
    $("#button").click(function() {
        $("#area-list").show();
        $("#area-list").addClass('center-align h-onetwo-rem');
        $("#creation").show();
        $("#creation").addClass('button-tag');
        $("#implementation").show();
        $("#implementation").addClass('button-tag');
        $("#analysis").show();
        $("#analysis").addClass('button-tag');

        //Hide unused Area labels      
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show Form labels
    $("#form").click(function() {
        $("#area-list").show();
        $("#area-list").addClass('center-align h-onetwo-rem');
        $("#setup").show();
        $("#setup").addClass('button-tag');
        $("#creation").show();
        $("#creation").addClass('button-tag');
        $("#implementation").show();
        $("#implementation").addClass('button-tag');
        $("#analysis").show();
        $("#analysis").addClass('button-tag');

        //Hide unused Area labels      
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Show Campaign labels
    $("#campaign").click(function() {
        $("#area-list").show();
        $("#area-list").addClass('center-align h-onetwo-rem');
        $("#creation").show();
        $("#creation").addClass('button-tag');
        $("#targeting").show();
        $("#targeting").addClass('button-tag');
        $("#analysis").show();
        $("#analysis").addClass('button-tag');
        $("#implementation").show();
        $("#implementation").addClass('button-tag');

        //Hide unused Area labels      
        $("#setup").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();
    });

    //Reset selection
    $("#reset").click(function() {

        //Hide reset button
        $("#reset").hide();

        //Hide Product labels
        $("#product-list").hide();
        $("#u4w").hide();
        $("#u4e").hide();
        $("#u4a").hide();
        $("#in-page").hide();
        $("#account").hide();
        $("#api").hide();
        $("#general").hide();

        //Hide Subject labels
        $("#subject-list").hide();
        $("#button").hide();
        $("#form").hide();
        $("#campaign").hide();
        $("#customization1").hide();
        $("#sdk").hide();
        $("#integration1").hide();

        //Hide Area labels
        $("#area-list").hide();
        $("#creation").hide();
        $("#implementation").hide();
        $("#analysis").hide();
        $("#setup").hide();
        $("#targeting").hide();
        $("#customization2").hide();
        $("#integration2").hide();
        $("#access").hide();
        $("#roles").hide();

        //Hide Misc labels
        $("#misc-list").hide();
        $("#lead").hide();
        $("#blog").hide();
        $("#spam").hide();
        $("#ooo").hide();
    });
});