({
    champMaster : function(component, event, helper) {
        console.log('I happened');
        let leagueApex = new component.get("c.makeCallout");
        let sumId = component.get("v.summonerId");
        leagueApex.setParams({summonerId : sumId,
                              index : 0});
        leagueApex.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                console.log(tempObj);
            }
        })
        $A.enqueueAction(leagueApex);
        let leagueApex1 = new component.get("c.makeCallout");
        leagueApex1.setParams({summonerId : sumId,
                              index : 1});
        leagueApex1.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                console.log(tempObj);
            }
        })
        $A.enqueueAction(leagueApex1);
        let leagueApex2 = new component.get("c.makeCallout");
        leagueApex2.setParams({summonerId : sumId,
                              index : 2});
        leagueApex2.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                console.log(tempObj);
            }
        })
        $A.enqueueAction(leagueApex2);
    }
})