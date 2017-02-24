import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchShop } from '../actions/index';


class Shop extends Component {

  componentWillMount() {
    this.props.fetchShop();
  }

  render() {
    const { shop } = this.props;
    if (!shop) {
      return <div></div>;
    }

    return (
      <div>
        {shop.count}
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {shop: state.ShopReducer.shop};
}

export default connect(mapStateToProps, { fetchShop })(Shop);
