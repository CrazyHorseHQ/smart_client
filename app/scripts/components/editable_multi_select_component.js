SmartClient.EditableMultiSelectComponent = SmartClient.EditableFieldComponent.extend({
  fieldContent: function () {
    var selectedObj = this.get('selectedValues');
    if (selectedObj) {
      var modes = selectedObj.map(function(item, index) {
        return item.label
      }).toArray();
      this.set('selectValue', modes);
      return modes.join(', ');
    }
    return this.get('emptyValue');
  }.property('selectedValues.@each.label'),

  didInsertElement: function () {
    // Setup the selected values based on the content and selectValue
    var values = this.get('selectValue');

    if (values && values.length) {
      var selectedObj = this.get('selectContent').filter(function(item, index, enumerable) {
        return values.contains(item.value);
      });
      this.set('selectedValues', selectedObj);
    }

    this._super();
  }
});
