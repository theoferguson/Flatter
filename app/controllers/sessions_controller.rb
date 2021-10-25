class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user
            session[:user_id] = user.id
            render json: user
        else
            render json: { error: 'Not a current username' }, status: :unauthorized
        end
    end

    def destroy
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: {error: 'Not logged in'}, status: :unauthorized
        end
    end
    
end
