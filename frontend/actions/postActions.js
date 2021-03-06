const Dispatcher = require('../dispatcher/dispatcher.js');
const PostConstants = require('../constants/postConstants');
const PostApi = require('../util/postApi');


const PostActions = {

  getPost: function(postId) {
    PostApi.getPost(postId, PostActions.receivePost);
  },

  deletePost: function(postId) {
    PostApi.deletePost(postId, PostActions.removePost);
  },

  fetchPosts: function() {
    PostApi.fetchPosts(PostActions.receivePosts);
  },

  updatePost: function(post) {
    PostApi.updatePost(post, PostActions.receivePost);
  },

  createPost: function(post) {
    PostApi.createPost(post, PostActions.receivePost);
  },

  receivePost: function(post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  removePost: function(post) {
    Dispatcher.dispatch({
      actionType: PostConstants.POST_REMOVED,
      post: post
    });
  },

  receivePosts: function(posts) {
    Dispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveErrors: function(errors) {
    Dispatcher.dispatch({
      actionType: PostConstants.ERRORS_RECEIVED,
      errors: errors
    });
  }

};

module.exports = PostActions;
