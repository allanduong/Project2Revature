public class findProductfields {
    
    @AuraEnabled
    public static String getRandImgUrl(){
        
        List<String> tempCoverUrl = new List<String>();
        
        for (List<Product2> product : [SELECT Game_Cover__c FROM Product2]){
            for(Product2 p : product){
                
                tempCoverUrl.add(p.Game_Cover__c);
            }
        }
        Integer listSize = tempCoverUrl.size() - 1;
        Integer randomNumber = Integer.valueof((Math.random() * listSize));
        String randomImg = tempCoverUrl[randomNumber];
        return randomImg;
    }
    
    @AuraEnabled
    public static String getGameName(){

        return null;
    }
    
}