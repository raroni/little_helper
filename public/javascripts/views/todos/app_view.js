var AppView = Backbone.View.extend({
  initialize: function() {
    window.Todos = new TodoCollection();
  }
});
