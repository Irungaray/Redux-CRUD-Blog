import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../src/actions/usersActions";

import "./styles/Users.css";

import Loader from "./Loader";
import NotFound from "./NotFound";
import UsersTable from "./UsersTable";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  printContent = () => {
    let isLoading = this.props.loading;
    let isError = this.props.error;

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return <NotFound />;
    }

    return <UsersTable />;
  };

  render() {
    return (
      <div className="margin">
        <h1>Users</h1>
        {this.printContent()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
