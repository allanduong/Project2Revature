({
    render : function(component, helper) {
        var ret = this.superRender();
        // do custom rendering here
        return ret;
    },
    rerender : function(component, helper){
        this.superRerender();
        helper.keyCheck(component, event, helper);
        // do custom rerendering here
    },
    afterRender: function (component, helper) {
        this.superAfterRender();
        // interact with the DOM here
    },
})