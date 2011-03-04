TodoManager.Views.App = Backbone.View.extend({
  el: $('#todo_app'),
  events: {
    'keypress .creator input': 'createOnEnter'
  },
  createOnEnter: function(e) {
    if(e.keyCode != 13) return;
    var input = $(e.currentTarget);
    
    Todos.create({ description: input.val() });
    input.val('');
  }
});
