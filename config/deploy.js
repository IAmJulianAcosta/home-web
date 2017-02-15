/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
  };

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: 'the-shoppe-home-web-staging',
      region: 'us-east-1'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: 'the-shoppe-home-web-staging',
      region: 'us-east-1'
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: 'the-shoppe-home-web-production',
      region: 'us-east-1'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: 'the-shoppe-home-web-production',
      region: 'us-east-1'
    };
  }
  return ENV;
};
