de.compeople.cordova.screenshot
==================

## How to install

Install it via cordova cli

```
cordova plugin add de.compeople.cordova.screenshot
```

This plugin is based on https://github.com/gitawego/cordova-screenshot that enables Cordova-powered applications to take screenshots on iOS, macOS and Android. We added Windows support.


### Modifications
- Added Windows support
  - implemented ```new Screenshot().URI()```
  - requires Windows 1709 (Fall Creators Update)
  
### Known limitations
- Screenshot also includes titlebar when application is running in window mode
- ```new Screenshot().save()```-Method is not implemented