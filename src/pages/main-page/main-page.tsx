import { Link } from 'react-router-dom';
import { Nullable } from 'vitest';
import { useState } from 'react';
import { AppRoutes } from '../../constants/constants';
import { OfferList } from '../../types/offer-list';
import { CitiesCardList } from '../../components/place-card/place-card-list.tsx';
import { Map } from '../../components/map/map.tsx';
import { Location } from '../../types/location.ts';

type MainPageProps = {
  offers: OfferList[];
  city: Location;
};

function MainPage({offers, city}: MainPageProps): JSX.Element {
  const [selectedId, setSelectedId] = useState<Nullable<string>>();
  const points = offers.map((off) => ({ name: off.id, point: off.location }));

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Root}
              >
                <span>Paris</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Root}
              >
                <span>Cologne</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Root}
              >
                <span>Brussels</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Root}
              >
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Root}
              >
                <span>Hamburg</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item"
                to={AppRoutes.Root}
              >
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
              Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                    Popular
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                    Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                    Top rated first
                </li>
              </ul>
            </form>
            <CitiesCardList
              offers={offers}
              onItemHover={setSelectedId}
            />
          </section>
          <div className="cities__right-section">
            <Map city={city} selectedPoint={points.find((p) => p.name === selectedId)} points={points} className="cities__map map"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
