import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchAllListings } from '../actions/index';
import ItemCard from './item_card';


class Store extends Component {

  componentWillMount() {
    this.props.fetchAllListings();
  }

  renderListings() {
    return this.props.listings.results.map((listing) => {
      return (<ItemCard item={listing} />);
    });
  }

  render() {
    const { listings } = this.props;
    if (!listings) {
      return <div>LOADING</div>;
    }

    return ( <div className="card-deck">{this.renderListings()}</div> );

  }
}

function mapStateToProps(state) {
  return {listings: state.ShopReducer.listings};
}

export default connect(mapStateToProps, { fetchAllListings })(Store);
