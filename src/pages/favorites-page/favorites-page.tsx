import { Link } from 'react-router-dom';
import { FavoritesList } from './favorites-list.tsx';
import { OfferList } from '../../types/offer-list.ts';
import { AppRoutes } from '../../constants/constants.ts';

type FavoritesPageProps = {
  offers: OfferList[];
};

export default function FavoritesPage({offers}: FavoritesPageProps) {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Listing Saved</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link"
          to={AppRoutes.Root}
        >
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}
