import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,

  actions: {
    updateRentalForm() {
      Ember.set(this, 'updateRentalForm', true);
    },

    update(rental) {
      var params = {
        owner : Ember.get(this, 'owner'),
        city : Ember.get(this, 'city'),
        type : Ember.get(this, 'type'),
        image : Ember.get(this, 'image'),
        bedrooms : Ember.get(this, 'bedrooms'),
      };

      Ember.set(this, 'updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
