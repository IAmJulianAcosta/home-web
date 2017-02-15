import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('side-navigation', 'Integration | Component | side navigation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{side-navigation}}`);

  assert.equal(this.$('.toolbar-title').text().trim(), 'The Apothecary Shoppe');
});
