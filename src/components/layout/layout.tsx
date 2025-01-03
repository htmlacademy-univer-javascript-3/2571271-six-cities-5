import cn from 'classnames';
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';

import { AppRoutes } from '../../constants/constants';
import { AuthStatus } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logoutAction } from '../../store/api-actions';

export function Layout() {
  const location = useLocation();
  const authStatus = useAppSelector((state) => state.auth.authorizationStatus);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pageClasses = cn('page', {
    'page--gray page--main': location.pathname === AppRoutes.Root as string,
    'page--gray page--login': location.pathname === AppRoutes.Login as string
  });

  const favoriteCount = useAppSelector(
    (state) => state.offers.favourites.length
  );
  const logOut = () => {
    dispatch(logoutAction());
    navigate(AppRoutes.Root);
  };

  return (
    <div className={pageClasses}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to={AppRoutes.Root}
                className="header__logo-link header__logo-link--active"
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authStatus === AuthStatus.Auth && user ? (
                  <>
                    <li className="header__nav-item user">
                      <Link
                        to={AppRoutes.Favorites}
                        className="header__nav-link header__nav-link--profile"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          {user.email}
                        </span>
                        <span className="header__favorite-count">
                          {favoriteCount}
                        </span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to={AppRoutes.Root} onClick={logOut} className="header__nav-link">
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoutes.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </div>);
}
