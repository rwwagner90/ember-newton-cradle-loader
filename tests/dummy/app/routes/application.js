import Ember from 'ember';
const { Route, RSVP, run } = Ember;

export default Route.extend({
  model() {
    return new RSVP.Promise((resolve) => {
      run.later(() => {
        resolve({});
      }, 3000);
    });
  }
});
