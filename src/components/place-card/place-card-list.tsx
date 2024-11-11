import PlaceCard from './place-card.tsx';
import { Nullable } from 'vitest';
import { CardTypes } from '../../constants/constants.ts';
import { OfferList } from '../../types/offer-list.ts';

type PlaceCardListProps = {
  offers: OfferList[];
  listType: CardTypes;
  onItemHover?: (id: Nullable<string>) => void;
  width: number;
  height: number;
  className?: string;
}

type PlaceCardListPropsCutted = Omit<PlaceCardListProps, 'width' | 'height' | 'className' | 'listType'>;

export function CardList(props: PlaceCardListProps) {
  return (
    <div className={props.className}>
      {props.offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          {...offer}
          width={props.width}
          height={props.height}
          cardType={props.listType}
          onHover={(id) => props.onItemHover?.call(null, id)}
        />
      ))}
    </div>
  );
}

export const NearbyCardList = (props: PlaceCardListPropsCutted) => (
  <CardList
    {...props}
    width={260}
    height={200}
    listType={CardTypes.Near}
    className='near-places__list places__list'
  />
);

export const CitiesCardList = (props: PlaceCardListPropsCutted) => (
  <CardList
    {...props}
    width={260}
    height={200}
    className='cities__places-list places__list tabs__content'
    listType={CardTypes.Cities}
  />
);

export const FavoritesCardList = (props: PlaceCardListPropsCutted) => (
  <CardList
    {...props}
    width={150}
    height={110}
    listType={CardTypes.Favorites}
    className='favorites__places'
  />
);
