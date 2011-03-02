class TodosController < ApplicationController
  def create
    @todo = Todo.create! params
    render :json => @todo
  end
end
