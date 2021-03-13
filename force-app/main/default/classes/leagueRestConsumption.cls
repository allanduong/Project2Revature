public class leagueRestConsumption {
    public static void makeCallout() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        
        if(response.getStatusCode() == 200) {
            Object deserializedResponse = JSON.deserializeUntyped(response.getBody());
            Map<String, Object> respMap = (Map<String, Object>) deserializedResponse;
            
            //Enter the json data
            Map<String, Object> champs = (Map<String, Object>) respMap.get('data');
            
            //This grabs all the champion as object
            for(Object champ : champs.keyset()){
                
                //This grabs each champions detailed info
                Map<String,Object> champion = (Map<String, Object>) champs.get((String)champ);
                System.debug(champ);
                System.debug(champion);
                //System.debug(champion.get('key'));
                
            }
            
            //Map<String, Object> specificProducts = (Map<String, Object>)products[0];
        }
    }
}