const React = require('react');

const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Modal = require('react-bootstrap').Modal;

const PostForm = require('./posts/postForm');

const UserActions = require('../actions/userActions');


var Navigation = React.createClass({

  getInitialState() {
    return {
      showPostFormModal: false,
    };
  },

  openPostForm(){
    this.setState({ showPostFormModal: true });
  },

  closePostForm(){
    this.setState({ showPostFormModal: false });
  },

  logoutUser(e) {
    e.preventDefault();
    UserActions.logoutUser();
  },

  render: function() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>collabright</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem onClick={this.openPostForm}>New Post</NavItem>
          <Modal show={this.state.showPostFormModal} onHide={this.closePostForm}>
            <Modal.Header closeButton>
              <Modal.Title>New Post</Modal.Title>
              <PostForm />
            </Modal.Header>
          </Modal>
          <NavItem onClick={this.logoutUser}>Log Out</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Navigation;