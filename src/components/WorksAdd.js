import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as worksActions from '../actions/worksActions';

import "./styles/Menu.css";

import Loader from "./Loader";
import NotFound from "./NotFound";

class WorksAdd extends Component {
  componentDidMount() {
    const {
      match: { params: { userId, workId } },
      works,
      changeUserId,
      changeTitle,
      cleanForm
    } = this.props;

    if (userId && workId) {
      const work = works[userId][workId];
      changeUserId(work.userId);
      changeTitle(work.title);
    } else {
      cleanForm();
    }
  }

  changeUserId = (event) => {
    this.props.changeUserId(event.target.value);
  }

  changeTitle = (event) => {
    this.props.changeTitle(event.target.value);
  }

  save = () => {
    const {
      match: { params: { userId, workId } },
      works,
      title,
      add,
      edit
    } = this.props;

    const newWork = {
      userId: userId,
      title: title,
      completed: false
    }

    if (userId && workId) {
      const work = works[userId][workId];
      const editedWork = {
        ...newWork,
        completed: work.completed,
        id: work.id
      }

      edit(editedWork);
    } else {
      add(newWork);
    }
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
        {
          (this.props.goBack) ? <Redirect to="/works" /> : " "
        }
      </div>
    );
  }
}

const mapStateToProps = ({ worksReducer }) => worksReducer;

export default connect(mapStateToProps, worksActions)(WorksAdd);