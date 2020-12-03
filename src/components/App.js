import React, { Component } from "react";
import axios from 'axios';

import initialState from "./initialState.json"

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  addRows = () => (
    this.state.users.map((user) => (
      <tr>
        <td>
          { user.name }
        </td>

        <td>
          { user.mail }
        </td>

        <td>
          { user.link }
        </td>
      </tr>
    ))
  );

  componentDidMount() {
    const response = axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response)
    this.setState(initialState)
  }

  render() {
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

          <tbody>
            { this.addRows() }
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;
