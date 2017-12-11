cordova.commandProxy.add("Screenshot",{
    saveScreenshot:function(successCallback,errorCallback,input) {
		errorCallback("Not implemented.");
    },
	getScreenshotAsURI:function(successCallback,errorCallback,input) {
        var inst = new ScreenshotRuntimeComponent.ScreenshotPluginRT()
        var res = inst.screenshotAsync()
        res.then(function(screenshotImageAsBase64){
			if (screenshotImageAsBase64.indexOf("Error!") > -1) {
				errorCallback("Error => " + screenshotImageAsBase64);
			} else {
				successCallback({"URI": "data:image/png;base64,"+ screenshotImageAsBase64});
			}
        })
        
        
    }
});
