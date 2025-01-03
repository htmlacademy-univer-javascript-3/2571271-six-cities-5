import { Link } from 'react-router-dom';

import { FavoritesList } from './favorites-list.tsx';
import { AppRoutes } from '../../constants/constants.ts';
import { useAppSelector } from '../../store/hooks.ts';


export function FavoritesPage() {
  const favourites = useAppSelector((state) => state.offers.favourites);

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Listing Saved</h1>
            <FavoritesList offers={favourites} />
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
