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
                component.set('v.champName', "1st: " + tempObj["champName"]);
                component.set('v.champLevel', "Level: " + tempObj["championLevel"]);
                component.set('v.champPoints', "Points: " + tempObj["championPoints"]);
                component.set('v.champIcon', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);

            }
        })
        $A.enqueueAction(leagueApex);
        let leagueApex1 = new component.get("c.makeCallout");
        leagueApex1.setParams({summonerId : sumId,
                              index : 1});
        leagueApex1.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.champName1', "2nd: " + tempObj["champName"]);
                component.set('v.champLevel1', "Level: " + tempObj["championLevel"]);
                component.set('v.champPoints1', "Points: " + tempObj["championPoints"]);
                component.set('v.champIcon1', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
            }
        })
        $A.enqueueAction(leagueApex1);
        let leagueApex2 = new component.get("c.makeCallout");
        leagueApex2.setParams({summonerId : sumId,
                              index : 2});
        leagueApex2.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.champName2', "3rd: " + tempObj["champName"]);
                component.set('v.champLevel2', "Level: " + tempObj["championLevel"]);
                component.set('v.champPoints2', "Points: " + tempObj["championPoints"]);
                component.set('v.champIcon2', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
            }
        })
        $A.enqueueAction(leagueApex2);
    }
})