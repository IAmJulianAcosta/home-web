/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
  };

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV['elastic-beanstalk'] = {
	  bucket: 'the-apothecary-shoppe-home-web-staging',
	  key: 'fastboot-deploy-info.json'
	};
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
	ENV['elastic-beanstalk'] = {
	  bucket: 'the-apothecary-shoppe-home-web-production',
	  key: 'fastboot-deploy-info.json'
	};
  }
  return ENV;
};
