var ghost = require('ghost');
var path = require('path');
var appInsights = require('applicationinsights')

console.log('App Insights Key: ' + process.env.APPINSIGHTS_INSTRUMENTATIONKEY)

appInsights.setup().start();

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
    ghostServer.start();
});