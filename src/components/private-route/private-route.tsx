import { Navigate, Outlet } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../constants/constants';
import { useAppSelector } from '../../store/hooks';

export function PrivateRoute() {
  const authStatus = useAppSelector((state) => state.auth.authorizationStatus);
  return authStatus === AuthStatus.Auth ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.Login} />
  );
}

