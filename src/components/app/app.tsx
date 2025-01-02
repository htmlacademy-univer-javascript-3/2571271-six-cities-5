import { Provider } from 'react-redux';
import { MainPage } from '../../pages/main-page/main-page';
import NotFound from '../../pages/errors/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../constants/constants';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { store } from '../../store';


export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path={AppRoutes.Root} element={<MainPage />} />
            <Route path={AppRoutes.Login} element={<LoginPage />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path={AppRoutes.Favorites} element={<FavoritesPage />}></Route>
            </Route>
            <Route path={AppRoutes.Offer}
              element={<OfferPage />}
            >
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
