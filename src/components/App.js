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
          { user.email }
        </td>

        <td>
          { user.website }
        </td>
      </tr>
    ))
  );

  async componentDidMount() {
    try {
      let userList = await axios({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET'
      });
      this.setState({
        users: userList.data
      })
    } catch (err) {
      console.log(err);
      this.setState(initialState)
    }
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
