const proxy = require('express-http-proxy');
const API_URL = 'https://www.tesla.com';
module.exports = function(app) {
  
    
      app.use(
        '/api',
        proxy('http://localhost:3003')
      );

      app.use(
        '/teslaApi',
        proxy(`${API_URL}`)
      );
  };
  