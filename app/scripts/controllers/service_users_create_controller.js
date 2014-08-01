SmartClient.ServiceUsersCreateController = Ember.ObjectController.extend({
  actions: {
    submit: function () {
      var self = this

      var new_service_user = this.store.createRecord('service_user', {
        name: self.get('name'),
        email: self.get('email'),
        address: self.get('address'),
        directions: self.get('directions'),
        hospital_number: self.get('hospital_number'),
        home_phone: self.get('home_phone'),
        mobile_phone: self.get('mobile_phone'),
        partner_phone: self.get('partner_phone'),
        estimated_delivery_date: self.get('estimated_delivery_date'),
        dob: self.get('dob')
      });

      new_service_user.save().then(function () {
        self.set('name', '')
        self.set('email', '')
        self.set('address', '')
        self.set('directions', '')
        self.set('hospital_number', '')
        self.set('home_phone', '')
        self.set('mobile_phone', '')
        self.set('partner_phone', '')
        self.set('estimated_delivery_date', '')
        self.set('dob', '')
        self.transitionToRoute('service_users');
      }, function () {
        new_service_user.deleteRecord()
      });
    }
  }
});