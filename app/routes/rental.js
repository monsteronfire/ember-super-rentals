import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },

  setupController(controller, model) {
    set(controller, 'rental', model);
  }
});
