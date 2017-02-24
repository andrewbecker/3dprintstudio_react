import React, { Component } from 'react';

class ItemCard extends Component {


  render() {
    const { item } = this.props;

    return (
        // <div className="col-sm-6 col-md-4 col-lg-2">
          <div className="card" style={{width: '170px'}}>
              <img className="card-img-top" src={item.MainImage.url_170x135} />
              <div className="card-block">
                <h5 className="card-title">{item.title.replace(/&quot;/g, '"')}</h5>
              </div>
              <div className="card-footer">
                <a href={`/listing/${item.url}`} className="btn btn-primary">More Info</a>
              </div>
          </div>
        // </div>
    );
  }
}

export default ItemCard;
