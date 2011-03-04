TodoManager.Views.Creator = Backbone.View.extend({
  el: $('#todo_manager_app .creator'),
  events: {
    'keypress input': 'createOnEnter'
  },
  createOnEnter: function(e) {
    if(e.keyCode != 13) return;
    var input = $(e.currentTarget);
    
    Todos.create({ description: input.val() });
    input.val('');
  }
});
