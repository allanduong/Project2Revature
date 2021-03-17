public class playerSearchRESTAPI{
    
    private static String apiToken = apikey.getapi();
    
    public static String getToken(){
        return apiToken;
    }
    @AuraEnabled
    public static void makeCallout(String sumsName){
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
            
            String accountId = (String)sumAccount.get('accountId');
            String sumId = (String)sumAccount.get('id');
            String puuid = (String)sumAccount.get('puuid');
            String accountName = (String)sumAccount.get('name');
            String profileIconId = (String)String.valueOf(sumAccount.get('profileIconId'));
            String accountLevel = (String)String.valueOf(sumAccount.get('summonerLevel'));
            
            boolean temp = false;
            
            List<SummonerAccount__c> sumsNames = [SELECT Name, id__c, puuid__c, accountId__c, profileIconId__c, Summoner_Level__c 
                                      FROM SummonerAccount__c 
                                      WHERE Name = :accountName];
            SummonerAccount__c summoner = new SummonerAccount__c();
            for(Integer i = 0; i < 1; i++){
                system.debug('I ran');

                if(sumsNames.size() >0){
                    sumsNames[0].accountId__c = accountId;
                    sumsNames[0].puuid__c = puuid;
                    sumsNames[0].Name = accountName;
                    sumsNames[0].profileIconId__c = profileIconId;
                    sumsNames[0].Summoner_Level__c = accountLevel;
                }
                else if(sumsNames.size() == 0){
                    
                    summoner.accountId__c = accountId;
                    summoner.id__c = sumId;
                    summoner.puuid__c = puuid;
                    summoner.Name = accountName;
                    summoner.profileIconId__c = profileIconId;
                    summoner.Summoner_Level__c = accountLevel;
                    temp = true;
                }
            }
            if(temp){
                sumsNames.add(summoner);
            }
            upsert sumsNames;
            
            
            
            //return sumAccount;
        }
        else if(response.getStatusCode() == 404 || response.getStatusCode() == 400){
        }
    }
}