public class championMastery {
    
    private static String apiToken = apikey.getapi();
    
    public static String getToken(){
        return apiToken;
    }
    
    @AuraEnabled
    public static Object makeCallout(String summonerId, Integer index){
        String token = championMastery.getToken();
        String sumId = summonerId;
        Object sumMasteries;
        Map<String, Object> finalSumMasteries = new Map<String, Object>();
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+sumId);
        request.setMethod('GET');
        request.setHeader('X-Riot-Token', token);
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200){
            Object deserializedResponse = JSON.deserializeUntyped(response.getBody());
            List<Object> respMap = (List<Object>) deserializedResponse;
            sumMasteries = respMap[index];
            Map<String, Object> sumMaster = (Map<String, Object>)sumMasteries;
            Integer champId = (Integer)sumMaster.get('championId');
            List<Champion__c> listChamp = [SELECT Name,
                                          Champion_Icon__c
                                          FROM Champion__c
                                          WHERE id__c = :champId];
            Champion__c champ = listChamp[0];
            finalSumMasteries.put('champIcon',(String)champ.Champion_Icon__c);
            finalSumMasteries.put('champName',(String)champ.Name);
            system.debug(sumMaster);
            sumMaster.putAll(finalSumMasteries);
            
            system.debug(sumMaster.get('champIcon'));
            return sumMaster;
        }
        else{
            return null;
        }
    }
}