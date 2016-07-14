var ghost = require('ghost');
var path = require('path');
var appInsights = require('applicationinsights')


if(process.env.APPINSIGHTS_INSTRUMENTATIONKEY) { 
    console.log('App Insights Key: ' + process.env.APPINSIGHTS_INSTRUMENTATIONKEY);
    appInsights.setup().start();
}
else { 
    console.log('APPINSIGHTS_INSTRUMENTATIONKEY is not set. Skipping appinsights startup'); 
}

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
    ghostServer.start();
});