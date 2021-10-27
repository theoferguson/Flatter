class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            Wall.create(user_id: user.id)
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.to_json(:include => {:wall => {:include => [:comments]}}), status: :ok
        else
            render json: { error: "Not logged in" }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
           user.update(bio: params[:bio])
           render json: user
        else 
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def profile
        user = User.find_by(id: params[:id])
        render json: user.to_json(:include => {:wall => {:include => [:comments]}}), status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :full_name, :program, :hometown, :image_url, :bio)
    end

end
