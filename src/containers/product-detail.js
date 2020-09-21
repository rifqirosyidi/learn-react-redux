import React, { Component } from "react";
import { connect } from "react-redux";

class productDetail extends Component {
  render() {
    if (!this.props.product) {
      return <div>Select User</div>;
    }
    return (
      <div style={{ display: "flex" }}>
        <div>
          <img src={this.props.product.image} alt="" />
        </div>
        <div>
          <h2>{this.props.product.title}</h2>
          <p>{this.props.product.description}</p>
          Size:
          <ul>
            {this.props.product.availableSizes.map((size) => (
              <li>{size}</li>
            ))}
          </ul>
          <p>{this.props.product.price}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.activeProduct,
  };
}

export default connect(mapStateToProps)(productDetail);
