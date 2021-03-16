({
	keyCheck : function(component, event, helper){
        if (event.which === 13) {
            let summonerName = component.find('sumName').get("v.value");
            console.log(summonerName);
        }
        

    }
})