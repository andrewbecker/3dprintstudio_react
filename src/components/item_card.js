import React, { Component } from 'react';

class ItemCard extends Component {
  render() {
    const { item } = this.props;

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{marginTop: '20px'}}>
            <div style={{width: '100%'}}>
              <img className="card-img-top product_thumb" src={item.MainImage.url_170x135} style={{width: '100%'}} />
            </div>
            <div className="card-block">
              <div className="card-title">
                <h2 className="h6 ellipsis">{item.title.replace(/&quot;/g, '"')}</h2>
              </div>
              <span>${item.price}</span>
            </div>
            <div className="card-footer">
              <a href={item.url} className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    );
  }
}

export default ItemCard;
