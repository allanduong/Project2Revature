({
    findPicture : function(component, event, helper) {
        let imgUrl = component.get("c.getRandImgUrl");
        let imgUrl1 = component.get("c.getRandImgUrl");
        let imgUrl2 = component.get("c.getRandImgUrl");
        imgUrl.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                component.set('v.gamePicture', response.getReturnValue());
            }
            
            
        })
        imgUrl1.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                component.set('v.gamePicture1', response.getReturnValue());
            }
            
        })
        imgUrl2.setCallback(this, function(response) {
            if(response.getState() == 'SUCCESS') {
                component.set('v.gamePicture2', response.getReturnValue());
            }
            
        })
        $A.enqueueAction(imgUrl)
        $A.enqueueAction(imgUrl1)
        $A.enqueueAction(imgUrl2)
    }
})