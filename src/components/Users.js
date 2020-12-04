import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../src/actions/usersActions";

import "./styles/Users.css";

import Loader from "./Loader";
import NotFound from "./NotFound";

class Users extends Component {
  addRows = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>

        <td>{user.email}</td>

        <td>{user.website}</td>
      </tr>
    ));

  componentDidMount() {
    this.props.getAll();
  }

  printContent = () => {
    let isLoading = this.props.loading;
    let isError = this.props.error;

    if(isLoading) {
      return <Loader />
    }

    if(isError) {
      return <NotFound msg={ isError } />
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>

            <th>Correo</th>

            <th>Enlace</th>
          </tr>
        </thead>

        <tbody>{ this.addRows() }</tbody>
      </table>
    );
  };

  render() {
    return (
      <div className="margin">
        { this.printContent() }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
