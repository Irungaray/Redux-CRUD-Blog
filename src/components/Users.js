import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../src/actions/usersActions";

import "./styles/Users.css";
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

  render() {
    console.log(this.props.loading)
    console.log(this.props.error)
    return (
      <div className="margin">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>

              <th>Correo</th>

              <th>Enlace</th>
            </tr>
          </thead>

          <tbody>{this.addRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
