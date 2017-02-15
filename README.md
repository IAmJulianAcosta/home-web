# home-web

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## DevOps

The ``setup.yaml`` template contains the CloudFormation template necessary to
spin up the following:

* An S3 Bucket for the staging/production version
* A Route 53 DNS record for staging.theshoppe.vegas and
  www.theshoppe.vegas
* SSL certs for each domain name

> [This template must be run in the ``us-east-1`` region!](https://cloudonaut.io/pitfall-acm-certificate-cloudfront-cloudformation/)

```bash
aws cloudformation create-stack --stack-name the-shoppe-web \
  --template-body file://setup.yaml \
  --region us-east-1 \
  --capabilities CAPABILITY_NAMED_IAM
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd home-web`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
