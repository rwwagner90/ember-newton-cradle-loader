import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | newton cradle loader', function(hooks) {
  setupRenderingTest(hooks);

  test('newton cradle renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{newton-cradle-loader}}`);

    assert.dom('.swing').exists();
    assert.dom('.shadow').exists();
  });

  test('swing html', async function(assert) {
    assert.expect(1);

    await render(hbs`{{newton-cradle-loader}}`);

    assert.equal(find('.swing').innerHTML.trim(),
      `<div class="swing-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="swing-r"></div>`);
  });

  test('shadow html', async function(assert) {
    assert.expect(1);

    await render(hbs`{{newton-cradle-loader}}`);

    assert.equal(find('.shadow').innerHTML.trim(),
      `<div class="shadow-l"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="shadow-r"></div>`);
  });
});
