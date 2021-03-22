public class matchHistoryAPI {
    
    private static String apiToken = apikey.getapi();
    
    public static String getToken(){
        return apiToken;
    }
    
    @AuraEnabled
    public static Object makeCallout(String apexEncryptedId, Integer index){
        String token = matchHistoryAPI.getToken();
        String encrypedId = apexEncryptedId;
        Map<String, Object> finalSumMasteries = new Map<String, Object>();
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/'+ encrypedId+'?endIndex=10');
        request.setMethod('GET');
        request.setHeader('X-Riot-Token', token);
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200){
            Object deserializedResponse = JSON.deserializeUntyped(response.getBody());
            Map<String, Object> respMap = (Map<String, Object>) deserializedResponse;
            List<Object> convertRespMap = (List<Object>) respMap.get('matches');
            Map<String, Object> match = (Map<String, Object>) convertRespMap[index];
            
            Integer champId = (Integer) match.get('champion');
            Long matchId = (Long) match.get('gameId');
            
            List<Champion__c> listChamp = [SELECT Name,
                                           Champion_Icon__c
                                           FROM Champion__c
                                           WHERE id__c = :champId];
            Champion__c champ = listChamp[0];
            List<String> mapChamp = new List<String>();
            finalSumMasteries.put('champIcon',(String)champ.Champion_Icon__c);
            finalSumMasteries.put('champName',(String)champ.Name);
            match.putAll(finalSumMasteries);
            request.setEndpoint('https://na1.api.riotgames.com/lol/match/v4/matches/'+matchId);
            response = http.send(request);
            
            if(response.getStatusCode()== 200){
                Object deserializedResponse1 = JSON.deserializeUntyped(response.getBody());
                respMap = (Map<String, Object>) deserializedResponse1;
                match.put('gameMode', respMap.get('gameMode'));
                
                List<Object> participants = (List<Object>) respMap.get('participants');
                Map<String, Object> playerInfo = new Map<String, Object>();
                
                for(Object player : participants){
                    
                    Map<String, Object> getPlayer = (Map<String, Object>) player;
                    Integer currentChampId = (Integer) getPlayer.get('championId');
                    if(currentChampId == champId){
                        playerInfo = (Map<String, Object>) player;
                        Map<String, Object> playerStats = (Map<String, Object>) playerInfo.get('stats');
                        match.put('win', playerStats.get('win'));
                        match.put('kills', playerStats.get('kills'));
                        match.put('deaths', playerStats.get('deaths'));
                        match.put('assists', playerStats.get('assists'));
                        match.put('champLevel', playerStats.get('champLevel'));
                        match.put('totalMinionsKilled', playerStats.get('totalMinionsKilled'));
                    }
                }
                
                //Testing
                //Map<String, Object> test = match;
                //for(Object a : test.values()){
                    //system.debug(a);
                //}
                //system.debug('----------------------------');
                //for(Object a : test.keySet()){
                    //system.debug(a);
                //}
                //End Testing
                
            }
            
            return match;
        }
        else{
            return null;
        }
        
    }
    
}