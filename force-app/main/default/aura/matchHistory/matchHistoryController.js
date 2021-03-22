({
    historyCheck : function(component, event, helper) {
        let encryptiD = component.get("v.encryptedAccountId");
        
        let leagueApex = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex.setParams({apexEncryptedId : encryptiD,
                              index : 0});
        
        leagueApex.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled0', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel0', tempObj["champLevel"]);
                component.set('v.assists0', tempObj["assists"]);
                component.set('v.deaths0', tempObj["deaths"]);
                component.set('v.kills0', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win0', 'DEFEAT'); 
                }
                else{
                    component.set('v.win0', 'VICTORY');
                }
                component.set('v.gameMode0', tempObj["gameMode"]);
                component.set('v.champName0', tempObj["champName"]);
                component.set('v.champIcon0', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane0', tempObj["lane"]);
                component.set('v.role0',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex);
        let leagueApex1 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex1.setParams({apexEncryptedId : encryptiD,
                              index : 1});
        
        leagueApex1.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled1', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel1', tempObj["champLevel"]);
                component.set('v.assists1', tempObj["assists"]);
                component.set('v.deaths1', tempObj["deaths"]);
                component.set('v.kills1', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win1', 'DEFEAT'); 
                }
                else{
                    component.set('v.win1', 'VICTORY');
                }
                component.set('v.gameMode1', tempObj["gameMode"]);
                component.set('v.champName1', tempObj["champName"]);
                component.set('v.champIcon1', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane1', tempObj["lane"]);
                component.set('v.role1',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex1);
        let leagueApex2 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex2.setParams({apexEncryptedId : encryptiD,
                              index : 2});
        
        leagueApex2.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled2', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel2', tempObj["champLevel"]);
                component.set('v.assists2', tempObj["assists"]);
                component.set('v.deaths2', tempObj["deaths"]);
                component.set('v.kills2', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win2', 'DEFEAT'); 
                }
                else{
                    component.set('v.win2', 'VICTORY');
                }
                component.set('v.gameMode2', tempObj["gameMode"]);
                component.set('v.champName2', tempObj["champName"]);
                component.set('v.champIcon2', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane2', tempObj["lane"]);
                component.set('v.role2',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex2);
        let leagueApex3 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex3.setParams({apexEncryptedId : encryptiD,
                              index : 3});
        
        leagueApex3.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled3', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel3', tempObj["champLevel"]);
                component.set('v.assists3', tempObj["assists"]);
                component.set('v.deaths3', tempObj["deaths"]);
                component.set('v.kills3', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win3', 'DEFEAT'); 
                }
                else{
                    component.set('v.win3', 'VICTORY');
                }
                component.set('v.gameMode3', tempObj["gameMode"]);
                component.set('v.champName3', tempObj["champName"]);
                component.set('v.champIcon3', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane3', tempObj["lane"]);
                component.set('v.role3',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex3);
        let leagueApex4 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex4.setParams({apexEncryptedId : encryptiD,
                              index : 4});
        
        leagueApex4.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled4', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel4', tempObj["champLevel"]);
                component.set('v.assists4', tempObj["assists"]);
                component.set('v.deaths4', tempObj["deaths"]);
                component.set('v.kills4', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win4', 'DEFEAT'); 
                }
                else{
                    component.set('v.win4', 'VICTORY');
                }
                component.set('v.gameMode4', tempObj["gameMode"]);
                component.set('v.champName4', tempObj["champName"]);
                component.set('v.champIcon4', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane4', tempObj["lane"]);
                component.set('v.role4',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex4);
        let leagueApex5 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex5.setParams({apexEncryptedId : encryptiD,
                              index : 5});
        
        leagueApex5.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled5', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel5', tempObj["champLevel"]);
                component.set('v.assists5', tempObj["assists"]);
                component.set('v.deaths5', tempObj["deaths"]);
                component.set('v.kills5', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win5', 'DEFEAT'); 
                }
                else{
                    component.set('v.win5', 'VICTORY');
                }
                component.set('v.gameMode5', tempObj["gameMode"]);
                component.set('v.champName5', tempObj["champName"]);
                component.set('v.champIcon5', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane5', tempObj["lane"]);
                component.set('v.role5',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex5);
        let leagueApex6 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex6.setParams({apexEncryptedId : encryptiD,
                              index : 6});
        
        leagueApex6.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled6', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel6', tempObj["champLevel"]);
                component.set('v.assists6', tempObj["assists"]);
                component.set('v.deaths6', tempObj["deaths"]);
                component.set('v.kills6', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win6', 'DEFEAT'); 
                }
                else{
                    component.set('v.win6', 'VICTORY');
                }
                component.set('v.gameMode6', tempObj["gameMode"]);
                component.set('v.champName6', tempObj["champName"]);
                component.set('v.champIcon6', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane6', tempObj["lane"]);
                component.set('v.role6',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex6);
        let leagueApex7 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex7.setParams({apexEncryptedId : encryptiD,
                              index : 7});
        
        leagueApex7.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled7', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel7', tempObj["champLevel"]);
                component.set('v.assists7', tempObj["assists"]);
                component.set('v.deaths7', tempObj["deaths"]);
                component.set('v.kills7', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win7', 'DEFEAT'); 
                }
                else{
                    component.set('v.win7', 'VICTORY');
                }
                component.set('v.gameMode7', tempObj["gameMode"]);
                component.set('v.champName7', tempObj["champName"]);
                component.set('v.champIcon7', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane7', tempObj["lane"]);
                component.set('v.role7',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex7);
        let leagueApex8 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex8.setParams({apexEncryptedId : encryptiD,
                              index : 8});
        
        leagueApex8.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled8', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel8', tempObj["champLevel"]);
                component.set('v.assists8', tempObj["assists"]);
                component.set('v.deaths8', tempObj["deaths"]);
                component.set('v.kills8', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win8', 'DEFEAT'); 
                }
                else{
                    component.set('v.win8', 'VICTORY');
                }
                component.set('v.gameMode8', tempObj["gameMode"]);
                component.set('v.champName8', tempObj["champName"]);
                component.set('v.champIcon8', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane8', tempObj["lane"]);
                component.set('v.role8',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex8);
        let leagueApex9 = new component.get("c.makeCallout");
        
        //console.log(i);
        leagueApex9.setParams({apexEncryptedId : encryptiD,
                              index : 9});
        
        leagueApex9.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                let tempObj = response.getReturnValue();
                component.set('v.totalMinionsKilled9', tempObj["totalMinionsKilled"]);
                component.set('v.champLevel9', tempObj["champLevel"]);
                component.set('v.assists9', tempObj["assists"]);
                component.set('v.deaths9', tempObj["deaths"]);
                component.set('v.kills9', tempObj["kills"]);
                if(tempObj["win"] == false){
                    component.set('v.win9', 'DEFEAT'); 
                }
                else{
                    component.set('v.win9', 'VICTORY');
                }
                component.set('v.gameMode9', tempObj["gameMode"]);
                component.set('v.champName9', tempObj["champName"]);
                component.set('v.champIcon9', "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/"+tempObj["champIcon"]);
                component.set('v.lane9', tempObj["lane"]);
                component.set('v.role9',tempObj["role"]);
                
            }
        })
        $A.enqueueAction(leagueApex9);
        
    }
})