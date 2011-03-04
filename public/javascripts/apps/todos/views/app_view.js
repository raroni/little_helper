var AppView = Backbone.View.extend({
  el: $('#todo_app'),
  events: {
    'keypress .creator input': 'createOnEnter'
  },
  initialize: function() {
    window.Todos = new TodoCollection();
  },
  createOnEnter: function(e) {
    if(e.keyCode != 13) return;
    var input = $(e.currentTarget);
    
    Todos.create({ description: input.val() });
    input.val('');
  }
});
