import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('newton-cradle-loader', 'Integration | Component | newton cradle loader', {
  integration: true
});

test('newton cradle renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{newton-cradle-loader}}`);

  assert.ok(this.$('.swing').is(':visible'));
  assert.ok(this.$('.shadow').is(':visible'));
});

test('swing html', function(assert) {
  assert.expect(1);

  this.render(hbs`{{newton-cradle-loader}}`);

  assert.equal(this.$('.swing').html().trim(),
  `<div class="swing-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="swing-r"></div>`);
});

test('shadow html', function(assert) {
  assert.expect(1);

  this.render(hbs`{{newton-cradle-loader}}`);

  assert.equal(this.$('.shadow').html().trim(),
  `<div class="shadow-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="shadow-r"></div>`);
});
