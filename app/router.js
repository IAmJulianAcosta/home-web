import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('location-and-hours');
  this.route('our-story');
  this.route('deliveries');
  this.route('clinical-trials');
  this.route('craft-cannabis');
  this.route('soothing-remedies');
  this.route('specials');
  this.route('patients');
  this.route('gallery');
  this.route('faq');
  this.route('intake');
  this.route('staff');
  this.route('jobs');
  this.route('events');
});

export default Router;
