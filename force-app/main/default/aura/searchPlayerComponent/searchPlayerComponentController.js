({
    searchFunction : function(component, event, helper){
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
                    let tempObj = response.getReturnValue();
                    component.set('v.profilePic', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/"+tempObj["profileIconId__c"]+".png");
                    component.set('v.profileName', tempObj["Name"]);
                    component.set('v.imgSize', "height: 150px; width: 150px;");
                    component.set('v.profileLevel', "Level: "+tempObj["Summoner_Level__c"]);
                    component.set('v.summonerId', tempObj["id__c"]);
                    component.set('v.encryptedAccountId', tempObj["accountId"]);
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