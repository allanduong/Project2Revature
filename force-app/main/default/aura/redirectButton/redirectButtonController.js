({
	goToNewPage: function(component, event, helper) {

    var urlEvent = $A.get("e.force:navigateToURL");
    urlEvent.setParams({
        "url": "/recordlist/Champion__c/All"
    });

    urlEvent.fire();
}
})