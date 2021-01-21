import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="counter_text">Your score: {this.props.ctr}</div>
        <button onClick={this.props.onIncCounter}>Increase one</button>
        <button onClick={this.props.onDecCounter}>Decrease one</button>
        <button onClick={this.props.resetCounter}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionType.DECREMENT }),
    resetCounter: () => dispatch({ type: actionType.RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
