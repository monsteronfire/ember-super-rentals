import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateRentalForm: false,

  actions: {
    imageShow: function () {
      Ember.set(this, 'isImageShowing', true);
    },

    imageHide: function () {
      Ember.set(this, 'isImageShowing', false);
    },

    update(rental, params) {
      this.sendAction('update', rental, params);
    }
  }
});
