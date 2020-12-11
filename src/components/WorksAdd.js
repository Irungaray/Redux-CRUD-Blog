import React, { Component } from 'react'

import "./styles/Menu.css"

class WorksAdd extends Component {
    render() {
        return (
            <div>
                <h1>
                    Add Work
                </h1>

                User Id:
                <input type="number" />
                <br/>
                <br/>

                Title:
                <input />
                <br/>
                <br/>

                <button>
                    Save
                </button>
            </div>
        )
    }
}

export default WorksAdd;