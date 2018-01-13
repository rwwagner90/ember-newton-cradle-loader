import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';

export default Route.extend({
  model() {
    return new RSVP.Promise((resolve) => {
      run.later(() => {
        resolve({});
      }, 5000);
    });
  }
});
