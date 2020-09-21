import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class productList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps)(productList);
