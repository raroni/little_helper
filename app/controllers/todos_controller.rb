class TodosController < ApplicationController
  def index 
    @todos = Todo.all
    render :json => @todos
  end
  
  def create
    @todo = Todo.create! params
    render :json => @todo
  end
end
