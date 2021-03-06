import React from 'react';
import {useSelector} from 'react-redux';
import {NearPlaceCard} from '../card/near-place-card';
import {getOffersNearBy} from '../../store/offers-data/selectors';

function NearbyOffersList() {
  const offersNearby = useSelector(getOffersNearBy);

  if (!Array.isArray(offersNearby)) {
    return null;
  }

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offersNearby.map((offer) => <NearPlaceCard key={offer.id} offer={offer} />)}
        </div>
      </section>
    </div>
  );
}

export default NearbyOffersList;
