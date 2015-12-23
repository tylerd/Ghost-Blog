var ghost = require('ghost');
var path = require('path');


ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
//    ghostServer.config.set({
//      production: {
//        url: 'http://tylerswebsite.net',
//        server: {
//          host: '127.0.0.1',
//          port: process.env.PORT
//        }
      
//      }
//    });
    ghostServer.start();
});