TodoManager.Views.Todo = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    $(this.el).html(this.model.get('description'));
  }
});
