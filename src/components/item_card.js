import React, { Component } from 'react';

class ItemCard extends Component {


  render() {
    const { item } = this.props;

    return (
        <div className="col-sm-6 col-md-4 col-lg-3" style={{marginTop: '20px'}}>
              <div style={{width: '100%'}}>
                <img className="card-img-top product_thumb" src={item.MainImage.url_170x135} style={{width: '100%'}} />
              </div>
              <div className="card-block">
                <h5 className="card-title">{item.title.replace(/&quot;/g, '"')}</h5> {/*Use css text-overflow: ellipsis on here*/}
              </div>
              <div className="card-footer">
                <a href={`/listing/${item.listing_id}`} className="btn btn-primary">More Info</a>
              </div>
          </div>
    );
  }
}

export default ItemCard;
