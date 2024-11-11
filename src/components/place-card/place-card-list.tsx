import { useState } from 'react';
import PlaceCard from './place-card.tsx';
import { Nullable } from 'vitest';
import { CardTypes } from '../../constants/constants.ts';
import { OfferList } from '../../types/offer-list.ts';

type PlaceCardListProps = {
  offers: OfferList[];
  listType: CardTypes;
}

export function CardList({offers, listType}: PlaceCardListProps) {
  const [, setActiveCardId] = useState<Nullable<string>>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          cardType={listType}
          onMouseOver={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(null)}
        />
      ))}
    </div>
  );
}

