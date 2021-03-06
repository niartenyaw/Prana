class Api::TeamsController < ApplicationController
  before_filter :ensure_logged_in!

  def index
  end

  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)
    @team.creator_id = current_user.id
    if @team.save
      TeamMembership.create(user_id: current_user.id, team_id: @team.id)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find(params[:id])
    if @team.update_attributes(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy
    render :show
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end
end
