import MainPage from '../../pages/main-page/main-page';
import NotFound from '../../pages/errors/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../constants/constants';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { Offer } from '../../types/offer.ts';
import { OfferList } from '../../types/offer-list.ts';
import { Comment } from '../../types/comment.ts';
import { MockLocations } from '../../mocks/locations.ts';

type AppProps = {
  offerList: OfferList[];
  offers: Offer[];
  comments: Comment[];
};

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={AppRoutes.Root} element={<MainPage offers={props.offerList} city={MockLocations[0]} />} />
          <Route path={AppRoutes.Login} element={<LoginPage />} />
          <Route element={<PrivateRoute authStatus={AuthStatus.Auth}/>}>
            <Route path={AppRoutes.Favorites} element={<FavoritesPage offers={props.offerList} />} />
          </Route>
          <Route path={AppRoutes.Offer} element={<OfferPage comments={props.comments} offers={props.offers} nearOffers={props.offerList} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
