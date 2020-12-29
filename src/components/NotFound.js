import React from "react";
import { connect } from "react-redux";

const NotFound = (props) => {
  return (
    <div>
      <h1>Hubo un error bien pero bien fulero:</h1>
      <h2>{props.error}</h2>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(NotFound);
