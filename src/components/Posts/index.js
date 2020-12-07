import React, { Component } from 'react'
import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";
import * as postsActions from "../../actions/postsActions";

const { getAll: getAllUsers } = usersActions;
const { getAll: getAllPosts } = postsActions;

class Posts extends Component {
    componentDidMount() {
        if (!this.props.usersReducer.users.length) {
            this.props.getAllUsers()
            this.props.getAllPosts()
        }
    }

    render() {
        console.log(this.props)

        return (
            <h1>asd</h1>
        )
    }
}

const mapStateToProps = ({ usersReducer, postsReducer}) => {
    return {
        usersReducer,
        postsReducer
    }
};

const mapDispatchToProps = {
    getAllUsers,
    getAllPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);