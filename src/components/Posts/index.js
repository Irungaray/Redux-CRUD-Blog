import React, { Component } from "react";
import { connect } from "react-redux";

import Loader from "../Loader";
import NotFound from "../NotFound";

import * as usersActions from "../../actions/usersActions";
import * as postsActions from "../../actions/postsActions";

import "./styles.css";

const { getAll: getAllUsers } = usersActions;
const { getByUser: getUserPosts } = postsActions;

class Posts extends Component {
  async componentDidMount() {
    const {
      getAllUsers,
      getUserPosts,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.usersReducer.users.length) {
      await getAllUsers();
    }

    if (this.props.usersReducer.error) {
      return;
    }

    if (!("postsKey" in this.props.usersReducer.users[key])) {
      getUserPosts(key);
    }
  }

  printUser = () => {
    const {
      match: {
        params: { key },
      },
      usersReducer
    } = this.props;

    if (!usersReducer.users.length || usersReducer.loading) {
      return <Loader />;
    }

    if (usersReducer.error) {
      return <NotFound msg={usersReducer.error} />;
    }

    const name = usersReducer.users[key].name;

    return (
      <div>
        <h1>Publicaciones de:</h1>
        <h2>{name}</h2>
        <h1>Usuario Nº:</h1>
        <h2>{this.props.match.params.key}</h2>
      </div>
    );
  };

  printPosts = () => {
    const {
      usersReducer,
      usersReducer: { users },
      postsReducer,
      postsReducer: { userPosts },
      match: { params: { key } }
    } = this.props;

    if (!users.length) return;
    if (usersReducer.error) return;

    if (postsReducer.loading) {
      return <Loader />
    }

    if (postsReducer.error) {
      return <NotFound msg={postsReducer.error} />
    }

    if (!userPosts.length) return;
    if (!("postsKey" in users[key])) return;

    const { postsKey } = users[key]

    return userPosts[postsKey].map((post) => (
      <div
        className="post"
        key={ post.id }
      >
        <h2>
          { post.title }
        </h2>

        <h3>
          { post.body }
        </h3>
      </div>
    ));
  };

  render() {
    console.log(this.props);

    return (
      <div>
        { this.printUser() }
        { this.printPosts() }
      </div>
    );
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
