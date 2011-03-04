class TodosController < ApplicationController
  def index 
    @todos = Todo.order('id asc').all
    render :json => @todos
  end
  
  def create
    @todo = Todo.create! params
    render :json => @todo
  end
  
  def destroy
    @todo = Todo.find params[:id]
    @todo.destroy
    render :json => { :status => :ok }
  end
end
