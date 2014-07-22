/*global Ember*/
MidwifeClient.Appointment = DS.Model.extend({
  //model attr here
  appointment_category_id: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  midwife_id: DS.attr(),
  patient_id: DS.attr(),
  priority: DS.attr(),
  visit_type: DS.attr()
});

// probably should be mixed-in...
MidwifeClient.Appointment.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({
        model: model,
        key: key,
        valueBinding: 'model.' + key });
    });
  }.property()
});
