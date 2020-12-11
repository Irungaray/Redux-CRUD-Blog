import React, { Component } from "react";
import { connect } from "react-redux";

import * as worksActions from '../actions/worksActions';

import "./styles/Menu.css";

import Loader from "./Loader";
import NotFound from "./NotFound";

class WorksAdd extends Component {
  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  }

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
  }

  save = () => {
    const { userId, title, add } = this.props;
    const newWork = {
      userId: userId,
      title: title,
      completed: false
    }

    add(newWork);
  }

  disableButton = () => {
    const { userId, title, loading } = this.props;

    if (loading) {
      return true;
    }

    if(!userId || !title) {
      return true;
    }

    return false;
  }

  showAction = () => {
    const { error, loading } = this.props;
    if (loading) {
      return <Loader />
    }

    if (error) {
      return <NotFound msg={error} />
    }
  }

  render() {
    return (
      <div>
        <h1>Add Work</h1>

        User Id:
        <input
          type="number"
          defaultValue={ this.props.userId }
          onChange={ this.changeUserId }
        />
        <br />
        <br />

        Title:
        <input
          defaultValue={ this.props.title }
          onChange={ this.changeTitle }
        />
        <br />
        <br />

        <button
          id="buttonDisabled"
          onClick={ this.save }
          disabled={ this.disableButton() }
        >
          Save
        </button>

        { this.showAction() }
      </div>
    );
  }
}

const mapStateToProps = ({ worksReducer }) => worksReducer;

export default connect(mapStateToProps, worksActions)(WorksAdd);