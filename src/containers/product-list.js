import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import selectProduct from "./../actions";

class productList extends Component {
  createListProduct() {
    return this.props.products.map((product) => (
      <div key={product.id}>
        <div>{product.title}</div>
        <button onClick={() => this.props.selectProduct(product)}>
          Show Detail
        </button>
      </div>
    ));
  }
  render() {
    return <div>{this.createListProduct()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function matchDispatchtoProps(dispatch) {
  return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

export default connect(mapStateToProps, matchDispatchtoProps)(productList);
