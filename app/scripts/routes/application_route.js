MidwifeClient.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return [
          {label: 'Midwives', resource: 'midwives'},
          {label: 'Appointments', resource: 'appointments'},
          /*{label: 'Patients', resource: 'patients'}*/
        ];
    }
});
