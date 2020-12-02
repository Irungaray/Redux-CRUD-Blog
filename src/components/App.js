import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Capo',
          mail: 'Capo@delagranputa.com',
          link: 'capo.com'
        },
        {
          name: 'superCapo',
          mail: 'superCapo@delagranputa.com',
          link: 'superCapo.com'
        }
      ]
    }
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
