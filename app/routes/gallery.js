import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { src: "/assets/images/gallery/SF1.jpg", title: "our showroom"},
      { src: "/assets/images/gallery/SF4.jpg", title: "our showroom"},
      { src: "/assets/images/gallery/VIP1.jpg", title: "vip"},
      { src: "/assets/images/gallery/VIP2.jpg", title: "vip"},
      { src: "/assets/images/gallery/VIP3.jpg", title: "vip"}
    ];
  }
});
