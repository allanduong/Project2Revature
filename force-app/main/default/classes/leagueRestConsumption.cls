public class leagueRestConsumption {
    public static void makeCallout() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        //id & name = name of champ !
        //key = id !
        //title = title !
        //blurb = short description !
        //tags = fighter type "Tank, Fighter, ect." !
        //
        //DIFFERENT API
        //Icon !
        //Banner & splash!
        List<Champion__c> listOfChamps = new List<Champion__c>();
        String champName;
        Integer champId;
        String champTitle;
        String champDescription;
        List<String> champTags = new List<String>();
        String champIcon;
        String champBannerSplash;
        
        
        
        if(response.getStatusCode() == 200) {
            Object deserializedResponse = JSON.deserializeUntyped(response.getBody());
            Map<String, Object> respMap = (Map<String, Object>) deserializedResponse;
            
            //Enter the json data
            Map<String, Object> champs = (Map<String, Object>) respMap.get('data');
            
            //This grabs all the champion as object
            for(Object champ : champs.keyset()){
                
                //This grabs each champions detailed info
                Map<String,Object> champion = (Map<String, Object>) champs.get((String)champ);
                champName = (String)champion.get('name');
                champId = Integer.valueOf(champion.get('key'));
                champTitle = (String)champion.get('title');
                champDescription = (String)champion.get('blurb');
                
                champIcon = champName.replaceAll( '\\s+', '');
                champIcon = champIcon.remove('\'') + '.png';
                champBannerSplash = champName.replaceAll( '\\s+', '');
                champBannerSplash = champBannerSplash.remove('\'') + '_0.jpg';
                
                List<Object> tempChampTag = (List<Object>)champion.get('tags');
                
                for (Object a : tempChampTag){
                    String b = (String)a;
                    champTags.add(b);
                    
                }
                //connect all the tags together
                String allString = string.join(champTags, ', ');
                
                Champion__c currentChamp = new Champion__c(Banner_and_Splash__c = champBannerSplash,
                                                          Champion_Icon__c = champIcon,
                                                          Name = champName,
                                                          Description__c = champDescription,
                                                          id__c = champId,
                                                          Tag__c = allString,
                                                          Title__c = champTitle);
                listOfChamps.add(currentChamp);
                champTags.clear();
            }
            insert listOfChamps;
        }
    }
}