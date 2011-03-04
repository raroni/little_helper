var TodoManager = {
  Views: {},
  Controllers: {},
  init: function() {
    window.Todos = new TodoCollection();
    new TodoManager.Views.App();
  }
};
