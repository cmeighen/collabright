class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      @post = @comment.post
      render 'api/posts/show'
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'api/posts/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:comment, :post_id)
  end

end
