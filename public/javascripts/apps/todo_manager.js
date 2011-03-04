var TodoManager = {
  Views: {},
  Controllers: {},
  init: function() {
    window.Todos = new TodoCollection();
    _.bindAll(this, 'renderAllTodos', 'renderTodo');
    new TodoManager.Views.Creator();
    Todos.bind('refresh', this.renderAllTodos);
    Todos.bind('add', this.renderTodo);
    Todos.fetch();
  },
  renderAllTodos: function() {
    Todos.each(this.renderTodo);
  },
  renderTodo: function(model) {
    var view = new TodoManager.Views.Todo({ model: model });
    $("#todo_app ul").append(view.render().el);
  }
};
