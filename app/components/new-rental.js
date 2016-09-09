import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,

  actions: {
    rentalFormShow() {
      Ember.set(this, 'addNewRental', true);
    },

    save() {
      var params = {
        owner: Ember.get(this, 'owner'),
        city: Ember.get(this, 'city'),
        type: Ember.get(this, 'type'),
        image: Ember.get(this, 'image'),
        bedrooms: Ember.get(this, 'bedrooms')
      };

      Ember.set(this, 'addNewRental', false);
      this.sendAction('save', params);
    }

  }
});
