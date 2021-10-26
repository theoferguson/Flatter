class CommentsController < ApplicationController

    def create
        comment = Comment.create!(comment_params)
        render json: comment
    end

    private

    def comment_params
        params.permit(:user_id, :wall_id, :content)
    end
     

end
