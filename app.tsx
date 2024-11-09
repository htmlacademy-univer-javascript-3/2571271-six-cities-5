import MainPage from './src/pages/main-page/main-page';
import NotFound from './src/pages/errors/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthStatus } from './src/components/constants';
import Login from './src/pages/login/login';
import Favorites from './src/pages/favorites/favorites';
import Offer from './src/pages/offer/offer';
import PrivateRoute from './src/components/private-route';

type AppProps = {
  placesCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainPage placesCount={props.placesCount} />}
        />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route path={AppRoutes.Offer} element={<Offer />} />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.NotAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
