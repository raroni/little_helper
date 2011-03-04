TodoManager.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#todo-template').html()),
  events: {
    'click .delete': 'delete'
  },
  initialize: function() {
    var model_attributes = this.model.toJSON();
    $(this.el).html(this.template(model_attributes));
  },
  delete: function() {
    this.model.destroy();
  }
});
