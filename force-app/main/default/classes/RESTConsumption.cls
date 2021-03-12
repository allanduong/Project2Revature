public inherited sharing class RESTConsumption {
    
    public static void makeCallout() {
        
        String apiLink = 'https://sandboxapi.g2a.com/v1/products?page=';
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://sandboxapi.g2a.com/v1/products');
        request.setMethod('GET');
        request.setHeader('Authorization', 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875');
        HttpResponse response = http.send(request);
        
        Integer counter = 2;
        String gameId;
        String gameName;
        String gameKeyType;
        Integer gameQuantity;
        String gamereleaseDate;
        String gameRegion;
        String gamePlatform;
        List<Object> gameImgs;
        String gameBanner;
        String gameCover;
        String gameIcon;
        Product2[] pros = new List<Product2>();
        String containsName;
        Decimal gamePrice;
        
        
        while(counter < 82){
            if(response.getStatusCode() == 200) {
                Object deserializedResponse = JSON.deserializeUntyped(response.getBody());
                Map<String, Object> respMap = (Map<String, Object>) deserializedResponse;
                List<Object> products = (List<Object>) respMap.get('docs');
                Map<String, Object> specificProducts = (Map<String, Object>)products[0];
                //system.debug(SpecificProducts.get('name'));
                gameImgs = (List<Object>) specificProducts.get('images');
                
                gamePrice = (Decimal) specificProducts.get('minPrice');
                gameId = (String) specificProducts.get('id');
                gameName = (String) specificProducts.get('name');
                gameKeyType = (String) specificProducts.get('type');
                gameQuantity = (Integer) specificProducts.get('qty');
                gamereleaseDate = (String) specificProducts.get('release_date');
                gameRegion = (String) specificProducts.get('region');
                gamePlatform = (String) specificProducts.get('platform');
                gameCover = (String) specificProducts.get('coverImage');
                gameIcon = (String) specificProducts.get('smallImage');
                gameBanner = (String) gameImgs[1];
                
                Product2 p = new Product2(ProductCode = gameId,
                                          Name = gameName,
                                          Type__c = gameKeyType,
                                          Quantity__c = gameQuantity,
                                          Release_Date__c = gamereleaseDate,
                                          Region__c = gameRegion,
                                          Platform__c = gamePlatform,
                                          Game_Cover__c = gameCover,
                                          Game_Banner__c = gameBanner,
                                          Game_Icon__c = gameIcon,
                                          Game_Price__c = gamePrice,
                                          IsActive = TRUE);
                if(!pros.contains(p)){
                    pros.add(p);
                }
                counter++;
                request.setEndpoint(apiLink + String.valueof(counter));
                response = http.send(request);
            }
        }
        insert pros;
    }
}