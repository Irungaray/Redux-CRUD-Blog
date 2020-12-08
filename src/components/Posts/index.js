import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";
import * as postsActions from "../../actions/postsActions";

const { getAll: getAllUsers } = usersActions;
const { getByUser: getUserPosts } = postsActions;

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.usersReducer.users.length) {
      await this.props.getAllUsers();
    }
    this.props.getUserPosts(this.props.match.params.key);
  }

  render() {
    console.log(this.props);

    return (
        <div>
            <h1>Publicaciones de</h1>
            <h2>{ this.props.match.params.key }</h2>
            <h2>a ver</h2>
        </div>
    )
  }
}

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return {
    usersReducer,
    postsReducer,
  };
};

const mapDispatchToProps = {
  getAllUsers,
  getUserPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
