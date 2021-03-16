({
	keyCheck : function(component, event, helper){
        if (event.which === 13) {
            let summonerName = component.find('sumName').get("v.value");
            if(summonerName.includes(" ")){
                summonerName = summonerName.replace(/\s/g, "%20");
            }
            console.log(summonerName);
        }
        

    }
})