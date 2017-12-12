de.compeople.cordova.screenshot
==================

## How to install

Install it via cordova cli

```
cordova plugin add de.compeople.cordova.screenshot
```

This plugins is based on the work of https://github.com/gitawego/cordova-screenshot


### Modifications
- Added windows support
  - implemented ```new Screenshot().URI()```
  - requires Windows 1709 (Fall Creators Update)
  
### Known limitations
- Screenshot also includes titlebar when application is running in window mode
- ```new Screenshot().save()```-Method is not implemented