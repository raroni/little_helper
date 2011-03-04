TodoManager.Views.Main = Backbone.View.extend({
  todo_views: [],
  initialize: function() {
    _.bindAll(this, 'renderAllTodos', 'renderTodo', 'removeTodo');
    
    new TodoManager.Views.Creator();
    Todos.bind('refresh', this.renderAllTodos);
    Todos.bind('add', this.renderTodo);
    Todos.bind('remove', this.removeTodo)
  },
  renderAllTodos: function(c) {
    c.each(this.renderTodo);
  },
  renderTodo: function(model) {
    var view = new TodoManager.Views.Todo({ model: model });
    $("#todo_app ul").append(view.render().el);
    this.todo_views[model.cid] = view;
  },
  removeTodo: function(model) {
    this.todo_views[model.cid].remove();
  }
});
