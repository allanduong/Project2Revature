public class findProductfields {
    
    public static List<String> getRandImgUrl(){
        
        List<String> tempCoverUrl;
        
        for (List<Product2> product : [SELECT Game_Cover__c FROM Product2]){
            for(Product2 p : product){
                String pr;
                pr = p.Game_Cover__c;
                
                tempCoverUrl.add(pr);
            }
        }
        return tempCoverUrl;
    }
    
}