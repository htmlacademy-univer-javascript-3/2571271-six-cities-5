import { Offer } from '../../types/offer.ts';
import { Comment } from '../../types/comment.ts';
import OfferGoods from './offer-goods.tsx';
import { CommentList } from '../../components/comments/comment-list.tsx';
import { CommentForm } from '../../components/comments/comment-form.tsx';
import { Stars } from '../../components/stars/stars.tsx';
import { RatingClasses } from '../../constants/constants.ts';
import { OfferList } from '../../types/offer-list.ts';
import { Map } from '../../components/map/map.tsx';
import { NearbyCardList } from '../../components/place-card/place-card-list.tsx';
import 'leaflet/dist/leaflet.css';
import styles from './offerMap.module.css';
import { useParams } from 'react-router-dom';
import NotFound from '../errors/404.tsx';

type OfferPageProps = {
  offers: Offer[];
  comments: Comment[];
  nearOffers: OfferList[];
};

export function OfferPage({offers, comments, nearOffers}: OfferPageProps) {
  const params = useParams();
  const offer = offers.find((off) => off.id === params.id);

  if (!offer){
    return (<NotFound />);
  }

  const offerLocation = {name: offer.id, point: offer.location};
  const displayedOffers = nearOffers
    .filter((off) => off.id !== offer.id)
    .slice(0, 3);

  const nearPoints = displayedOffers
    .map((off) => ({name: off.id, point: off.location}))
    .concat(offerLocation);

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((img) => (
                <div className="offer__image-wrapper" key={img}>
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button
                  className={`button offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <Stars rating={offer.rating} isValueHidden={false} ratingClass={RatingClasses.Offer} />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferGoods items={offer.goods}/>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <CommentList comments={comments} />
                <CommentForm/>
              </section>
            </div>
          </div>
          <div className={styles['offer__map-wrapper']}>
            <Map
              city={offer.city}
              points={nearPoints}
              selectedPoint={offerLocation}
              className="offer__map map"
            />
          </div>
        </section>
        <div className="container">
          <NearbyCardList
            offers={displayedOffers}
          />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
