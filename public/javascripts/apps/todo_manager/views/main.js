TodoManager.Views.Main = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, 'renderAllTodos', 'renderTodo');
    
    new TodoManager.Views.Creator();
    Todos.bind('refresh', this.renderAllTodos);
    Todos.bind('add', this.renderTodo);
  },
  renderAllTodos: function() {
    Todos.each(this.renderTodo);
  },
  renderTodo: function(model) {
    var view = new TodoManager.Views.Todo({ model: model });
    $("#todo_app ul").append(view.render().el);
  }
});
