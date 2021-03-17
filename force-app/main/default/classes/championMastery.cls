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
            system.debug(sumMasteries);
            return sumMasteries;
        }
        else{
            return null;
        }
    }
}