class Api::TasksController < ApplicationController
  before_filter :ensure_logged_in!

  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(task_params)
    @task.creator_id = current_user.id
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages , status: 422
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:name, :description,
      :finished, :creator_id, :assignee_id, :project_id)
  end
end
