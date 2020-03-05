 function() {
	  
  karate.configure('connectTimeout', 60000);
  karate.configure('readTimeout', 60000);
  karate.configure('logPrettyResponse', true);

  var env = karate.env; // get system property 'karate.env'
  var platform = karate.properties['karate.platform'];
  var company = karate.properties['karate.company'];
  var systemPath = java.lang.System.getenv('PATH');
  var port = karate.properties['demo.server.port'];

	karate.log('karate.env system property was:', env);
	karate.log('karate.platform system property was:', platform);
	karate.log('karate.company system property was:', company);
	karate.log('SystemPath', systemPath);

	var config = {
		    env: env,
		    apiURL: 'http://127.0.0.1:'+port+'/fps-app-ws-altacliente/'
	}

	if (env == 'dev') {
	    config.apiURL = 'http://127.0.0.1:8081/fps-app-ws-altacliente/';
	} else if (env == 'local') {
	    config.apiURL = 'http://localhost/api/v1/';
	}
  
   return config;
  
}