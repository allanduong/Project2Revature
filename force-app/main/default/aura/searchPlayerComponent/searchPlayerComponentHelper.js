({
	keyCheck : function(component, event, helper) {
		if (event.which === 13) {
            let summonerName = component.find('sumName').get("v.value");
            if(summonerName.includes(" ")){
                summonerName = summonerName.replace(/\s/g, "%20");
                console.log(summonerName);
            }
            
            let leagueApex = new component.get("c.makeCallout");
            leagueApex.setParams({sumsName : summonerName});
            leagueApex.setCallback(this, function(response) {
                console.log(response.getState());
                if(response.getState() == 'SUCCESS') {
                    
                    //component.set('v.sumInfo', response.getReturnValue());
                }
                else if(response.getState() == 'ERROR') {
                    console.log('FAILED');
                    //component.set('v.sumInfo', response.getReturnValue());
                }
            })
            $A.enqueueAction(leagueApex);
        }
	}
})