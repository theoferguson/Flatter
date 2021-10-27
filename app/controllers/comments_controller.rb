class CommentsController < ApplicationController
     
    def index
        render json: Comment.all
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def show 
        comment = Comment.find(params[:id])
        render json: comment, status: :created
    end

    private

    def comment_params
        params.require(:comment).permit(:content, :user_id, :wall_id)
    end
     

end
