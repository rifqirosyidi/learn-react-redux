import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class productList extends Component {
  createListProduct() {
    return this.props.products.map((product) => (
      <li key={product.id}>{product.title}</li>
    ));
  }
  render() {
    return (
      <div>
        <ul>{this.createListProduct()}</ul>
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
