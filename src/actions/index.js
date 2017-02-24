import axios from 'axios';
import jsonp from 'then-jsonp';

const API_KEY = 'dlq3m6j6gbpr9siz3v1cnj1e';
const SHOP_NAME = 'The3DPrintStudio';
const ROOT_URL = 'https://openapi.etsy.com/v2';

export const FETCH_SHOP = 'FETCH_SHOP';
export const FETCH_ALL_LISTINGS = 'FETCH_ALL_LISTINGS';
export const FETCH_SINGLE_LISTING = 'FETCH_SINGLE_LISTING';

export function fetchShop() {
    const url = `${ROOT_URL}/shops/${SHOP_NAME}.js?api_key=${API_KEY}`;

    const request = jsonp('GET', url);

    return {
      type: FETCH_SHOP,
      payload: request
    };
}

export function fetchAllListings() {
  const url = `${ROOT_URL}/shops/${SHOP_NAME}/listings/active.js?api_key=${API_KEY}&includes=MainImage`;

  const request = jsonp('GET', url);

  return {
    type: FETCH_ALL_LISTINGS,
    payload: request
  };
}

export function fetchSingleListing(listing_id) {
  const url = `${ROOT_URL}/listings/${listing_id}.js?api_key=${API_KEY}`;

  const request = jsonp('GET', url);

  return {
    type: FETCH_SINGLE_LISTINGS,
    payload: request
  };
}


// https://openapi.etsy.com/v2/shops/The3DPrintStudio?api_key=dlq3m6j6gbpr9siz3v1cnj1e
