class WallsController < ApplicationController

    def show
        wall = Wall.find_by(user_id: params[:id])
        render json: wall.to_json(:include => [:comments]), status: :ok
    end
    
end
