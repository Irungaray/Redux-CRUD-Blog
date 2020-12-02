import React, { Component } from "react";
import initialState from "./initialState.json"

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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
