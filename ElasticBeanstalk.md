# How to deploy to EBS

1. Run `ember deploy production` or `ember deploy staging`
1. `git clone git@github.com:IAmJulianAcosta/fastboot-aws.git && cd fastboot-aws && npm install`
1. Install [Elasticbeanstalk CLI](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)
1. To create production environment: `eb create --envvars FASTBOOT_S3_BUCKET=the-apothecary-shoppe-home-web-production, FASTBOOT_S3_KEY=fastboot-deploy-info.json`
1. To create staging environment: `eb create --envvars FASTBOOT_S3_BUCKET=the-apothecary-shoppe-home-web-staging, FASTBOOT_S3_KEY=fastboot-deploy-info.json`
1. Configure with route 53 DNS
1. Repeat step 1 to deploy when needed

## Explanation
The fastboot-aws repository runs a npm server that will be notified when application is updated using `ember deploy`, and will pull changes from bucket. This script is deployed to EBS using `eb create`.

Also this node script starts a fastboot server that will be running on EC2 instance.

## Note
The environment variables that are passed to instance in `eb create` should be the same that are on `config/deploy.js`.
