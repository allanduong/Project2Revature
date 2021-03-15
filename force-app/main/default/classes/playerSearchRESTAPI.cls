public class playerSearchRESTAPI{
    
    private static String apiToken = apikey.getapi();
    
    public static String getToken(){
        return apiToken;
    }
    @AuraEnabled
    public static void makeCallout(String summonerName){
        String sumName = summonerName;
        String token = playerSearchRESTAPI.getToken();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+sumName);
        request.setMethod('GET');
        request.setHeader('X-Riot-Token', token);
        HttpResponse response = http.send(request);
        
        if(response.getStatusCode() == 200){
            //System.debug('SUCCESS');
        }
        if(response.getStatusCode() == 404){
            //System.debug('FAILED');
        }
    }
    
}