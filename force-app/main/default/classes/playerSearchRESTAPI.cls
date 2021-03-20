public class playerSearchRESTAPI{
    
    private static String apiToken = apikey.getapi();
    
    public static String getToken(){
        return apiToken;
    }
    @AuraEnabled
    public static Object makeCallout(String sumsName){
        String sumName = sumsName;
        String token = playerSearchRESTAPI.getToken();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+sumName);
        request.setMethod('GET');
        request.setHeader('X-Riot-Token', token);
        HttpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200){
            Object deserializedResponse = JSON.deserializeUntyped(response.getBody());
            Map<String, Object> respMap = (Map<String, Object>) deserializedResponse;
            Map<String, Object> sumAccount = (Map<String, Object>) respMap;
            system.debug(sumAccount);
            
            sumAccount.put('accountId__c', (String)sumAccount.get('accountId'));
            sumAccount.put('id__c', (String)sumAccount.get('id'));
            sumAccount.put('puuid__c', (String)sumAccount.get('puuid'));
            sumAccount.put('Name', (String)sumAccount.get('name'));
            sumAccount.put('profileIconId__c', (String)String.valueOf(sumAccount.get('profileIconId')));
            sumAccount.put('Summoner_Level__c', (String)String.valueOf(sumAccount.get('summonerLevel')));          
            
            system.debug(sumAccount);
            return sumAccount;
                }
        return null;
    }
}