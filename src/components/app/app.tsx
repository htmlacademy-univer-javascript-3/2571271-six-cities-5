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

type AppProps = {
  offerList: OfferList[];
  offer: Offer;
  comments: Comment[];
};

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={AppRoutes.Root} element={<MainPage offers={props.offerList}/>}/>
          <Route path={AppRoutes.Login} element={<LoginPage />} />
          <Route element={<PrivateRoute authStatus={AuthStatus.Auth}/>}>
            <Route path={AppRoutes.Favorites} element={<FavoritesPage offers={props.offerList}/>}></Route>
          </Route>
          <Route path={AppRoutes.Offer} element={<OfferPage comments={props.comments} offer={props.offer}/>}></Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
