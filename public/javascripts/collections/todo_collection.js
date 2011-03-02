var TodoCollection = Backbone.Collection.extend({
  model: Todo,
  url: '/todos'
});
