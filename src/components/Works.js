import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as worksActions from "../actions/worksActions";

import "./styles/Works.css";
import "./styles/Menu.css";

import Loader from "./Loader";
import NotFound from "./NotFound";

class Works extends Component {
  componentDidMount() {
    this.props.getWorks();
  }

  printContent = () => {
    const { works, loading, error } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <NotFound msg={error} />;
    }

    return Object.keys(works).map((userId) => (
      <div key={userId}>
        <h2>Usuario {userId}</h2>

        <div className="works">{this.printWorks(userId)}</div>
      </div>
    ));
  };

  printWorks = (userId) => {
    const { works } = this.props;
    const forEachUser = {
      ...works[userId],
    };

    return Object.keys(forEachUser).map((workId) => (
      <div key={workId}>
        <input type="checkbox" defaultChecked={forEachUser[workId].completed} />
        {forEachUser[workId].title}
      </div>
    ));
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <button>
          <Link to="/works/add">Add</Link>
        </button>

        {this.printContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ worksReducer }) => worksReducer;

export default connect(mapStateToProps, worksActions)(Works);
